<?php
    //连接数据库
    include 'connect.php';
    //中文乱码
    header("content-type:text/html;charset=utf-8");

    $fn = isset($_POST['fn']) ? $_POST['fn'] : '';//数据库的功能
    $table = isset($_POST['tableName']) ? $_POST['tableName'] : '';//表名
    $a = isset($_POST['a']) ? $_POST['a'] : '';
    //通过id查询数据
    $id = isset($_POST['id']) ? $_POST['id'] : '';
    $Num = isset($_POST['num']) ? $_POST['num'] : '';
    //登录
    $username = isset($_POST['username']) ? $_POST['username'] : '';
    $password = isset($_POST['password']) ? $_POST['password'] : '';
    $password = md5($password);
    //商品列表
    $page = isset($_POST['page']) ? $_POST['page'] : '';
    $pty = isset($_POST['pty']) ? $_POST['pty'] : '';

    $index=($page-1)*$pty;

    if ($fn == 'select') {
        if ($a == 'yhm') {
            $sql = "SELECT * FROM $table WHERE name='$username'";
            $res = $conn->query($sql);
            $num = $res->num_rows;
            if ($num > 0) {
                //已存在
                $yhm1 = array(
                    'code' => 1,
                    'message'=>'对不起，该用户名已经被注册了！' 
                );
                echo json_encode($yhm1,JSON_UNESCAPED_UNICODE);
            } else {
                //可以注册
                $yhm2 = array(
                    'code' => 0,
                    'message'=>'恭喜你，该用户名可以注册！' 
                );
                echo json_encode($yhm2,JSON_UNESCAPED_UNICODE);
            }
        }
        if ($a == 'reg') {
            $sql = "SELECT * FROM $table WHERE name='$username'";
            $res=$conn->query($sql);
            $num = $res->num_rows;
            if ($num == 0) {
                $sql = "INSERT INTO $table(name,psw) VALUES('$username','$password')";
                $res=$conn->query($sql);
                if($res){
                    $reg1 = array(
                        'code' => 1,
                        'message' => '注册成功！' 
                    );
                    echo json_encode($reg1,JSON_UNESCAPED_UNICODE);
                }
            } else {
                $reg2 = array(
                    'code' => 0,
                    'message'=>'注册失败！' 
                );
                echo json_encode($reg2,JSON_UNESCAPED_UNICODE);
            }
        }
        if ($a == 'login') {
            if (isset($_COOKIE['name'])) {
                $login = array('code'=>2,'message'=>'你已经登陆过了！');
                echo json_encode($login,JSON_UNESCAPED_UNICODE);
            }
            else{
                $sql = "SELECT * FROM $table WHERE name='{$username}' AND psw='$password'";
                $res = $conn ->query($sql);
                $row = $res->num_rows;
                if($row){
                    $sql = "SELECT id FROM $table WHERE name='{$username}'";
                    $result = $conn->query($sql);
                    $row = $result->fetch_assoc();
                    $login1 = array(
                        'code' => 1,
                        'message' => '登录成功！' 
                    );
                    echo json_encode($login1,JSON_UNESCAPED_UNICODE);
                } else {
                    $login2 = array(
                        'code' => 0,
                        'message'=>'登录失败！' 
                    );
                    echo json_encode($login2,JSON_UNESCAPED_UNICODE);
                }
            }
        }
        if ($a == 'quit') {
            if (!isset($_COOKIE['name'])) {
                $quit1 = array(
                    'code' => 0,
                    'message' => '您没有登陆！' 
                );
                echo json_encode($quit1,JSON_UNESCAPED_UNICODE);
            } else {
                setcookie('name', '', time() - 3600*60, '/');
                $quit2 = array(
                    'code' => 1,
                    'message' => '退出成功！' 
                );
                echo json_encode($quit2,JSON_UNESCAPED_UNICODE);
            }  
        }
        if ($a == 'cid') {
            $sql = "SELECT * FROM $table WHERE id='$id'";
                $res=$conn->query($sql);
                $row=$res->fetch_all(MYSQLI_ASSOC);
                $goods = array(
                    "list" => $row,
                    "code" => 1,
                );
                echo json_encode($goods,JSON_UNESCAPED_UNICODE);
        }
    }
    
    if ($fn == 'list') {
        $sql = "SELECT * FROM $table LIMIT $index,$pty";
        $res=$conn->query($sql);
        $row=$res->fetch_all(MYSQLI_ASSOC);
        $sql2 = "SELECT * FROM $table";
        $res2 = $conn->query($sql2);
        $num = $res2->num_rows;
        $pages =  $num / $pty;
        $goods = array(
            "long" => $num,
            "list" => $row,
            "page" => $page,
            "pty" => $pty,
            "pages" => $pages
        );
        echo json_encode($goods,JSON_UNESCAPED_UNICODE);
    }
    if ($fn == 'paixun') {
        if ($a == 's') {
            # code...
            $sql = "SELECT * FROM $table ORDER BY price LIMIT $index,$pty;";
        }
        if ($a == 'j') {
            # code...
            $sql = "SELECT * FROM $table ORDER BY price DESC LIMIT $index,$pty;";
        }
        $res=$conn->query($sql);
        $row=$res->fetch_all(MYSQLI_ASSOC);
        $sql2 = "SELECT * FROM $table";
        $res2 = $conn->query($sql2);
        $num = $res2->num_rows;
        $pages =  $num / $pty;
        $goods = array(
            "long" => $num,
            "list" => $row,
            "page" => $page,
            "pty" => $pty,
            "pages" => $pages
        );
        echo json_encode($goods,JSON_UNESCAPED_UNICODE);
    }
    if ($fn == 'jian') {
        if ($a == 's') {
            # code...
            $sql = "SELECT * FROM $table ORDER BY pinlun DESC LIMIT $index,$pty;";
        }
        if ($a == 'j') {
            # code...
            $sql = "SELECT * FROM $table ORDER BY pinlun LIMIT $index,$pty;";
        }
        $res=$conn->query($sql);
        $row=$res->fetch_all(MYSQLI_ASSOC);
        $sql2 = "SELECT * FROM $table";
        $res2 = $conn->query($sql2);
        $num = $res2->num_rows;
        $pages =  $num / $pty;
        $goods = array(
            "long" => $num,
            "list" => $row,
            "page" => $page,
            "pty" => $pty,
            "pages" => $pages
        );
        echo json_encode($goods,JSON_UNESCAPED_UNICODE);
    }
    if ($fn == 'add') {
        $sql = "SELECT * FROM car WHERE id='$id'";
        $res=$conn->query($sql);
        $num = $res->num_rows;
        if ($num > 0) {
            //已存在
            $sql = "SELECT * FROM car WHERE id='$id'";
            $res=$conn->query($sql);
            $row=$res->fetch_all(MYSQLI_ASSOC);
            $nums = $row[0]['num'];
            $ps = $row[0]['price'];
            if ($a == 1) {
                $nums++;
            } else  if($a == 'jj' ){
                $nums += $Num;
            }else  if($a == 'zi' ){
                $nums = $Num;
            }
            $zong = $ps*$nums;
            $sql2="UPDATE car SET num='$nums',zong='$zong' WHERE id='$id'";
            $res2=$conn->query($sql2);
        } else {
            $sql = "SELECT * FROM list WHERE id='$id'";
            $res=$conn->query($sql);
            $row=$res->fetch_all(MYSQLI_ASSOC);
            $ids = $row[0]['id'];
            $ns = $row[0]['name'];
            $ps = $row[0]['price'];
            $is = $row[0]['imgurl'];
            $pis = $row[0]['pinlun'];
            $zong = $ps * $Num;
            $sql2 = "INSERT INTO car(id,name,price,imgurl,pinlun,num,zong) VALUES('$ids','$ns','$ps','$is','$pis','$Num','$zong')";
            $res2=$conn->query($sql2);
        }
    }
    if ($fn == 'car') {
        $sql = "SELECT * FROM car";
        $res=$conn->query($sql);
        $row=$res->fetch_all(MYSQLI_ASSOC);
        if ($row) {
            # code...
            $goods = array(
                "list" => $row,
                "code" => 1
            );  
            echo json_encode($goods,JSON_UNESCAPED_UNICODE);
        } else {
            # code...
            $goos = array(
                "code" => 0
            );  
            echo json_encode($goos,JSON_UNESCAPED_UNICODE);
        }
        
    }
    if ($fn == 'del') {
        $sql = "DELETE FROM car WHERE id='$id';";
        $res=$conn->query($sql);
    }
    if ($fn == 'dels') {
        $sql = "DELETE FROM car;";
        $res=$conn->query($sql);
    }
    $conn->close();
?>