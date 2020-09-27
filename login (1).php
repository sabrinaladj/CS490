<?php

if (isset($_POST['login'])) {

    require "config.php";

    $email = $_POST['email']; //allows to sign in with email instead of username
    $password = $_POST['password'];

    if (empty($email) || empty($password)) {
        header("Location: ../index.html?errror=emptyfields");
        exit();
    }

    else {
        $sql = "SELECT * FROM user_table WHERE username=? OR email=?";
        $stmt = mysqli_stmt_init($conn);
        
        if (!mysqli_stmt_prepare($stmt, $sql)) {
            header("Location: ../index.html?error=sqlerror");
            exit();
        }

        else {
            mysqli_stmt_bind_param($stmt, "ss", $email, $email); 
            mysqli_stmt_execute($stmt);
            $result = mysqli_stmt_get_result($stmt);
            
            if ($row = mysqli_fetch_assoc($result)){
                $passwordCheck = password_verify($password, $row['password']); //$row['password'] from the database

                if ($passwordCheck == false) {
                    header("Location: ../index.html?error=wrongpassword");
                    exit();
                }
                else if($passwordCheck == true) {
                    header("Location:./next_file.html");
                    session_start();
                    $_SESSION['username'] = $row['usernameID'] //usernameID is the auto incremented primary key in the database 
                    $_SESSION['username'] = $row['username'] //$row['username'] from the database

                    //IMPORTANT: start a session in every page.
                }
                else {
                    header("Location: ../index.html?error=wrongpassword");
                    exit();
                }

            }
            else {
                header("Location: ../index.html?error=nouser");
                exit();

            }

        }
    }
}
else {
    header("Location: ../index.html");
    exit();
}
