<?php
    include("connectdb.php");
    include(".htaccess.php");

    $result = $mysqli -> query("select * from heroes");

    $data = array();
    $heroes = array();
    
    $keys = array('totalHeroesCount', 'heroes');

    if(mysqli_num_rows($result) > 0){
        $totalHeroescount = 0;
        for($i = 0; $i < mysqli_num_rows($result); $i++){
            $fileload = mysqli_fetch_array($result);
            array_push($heroes, $fileload); 
            $totalHeroescount++;
        }
        array_push($data, $totalHeroescount);

    }
    

    header('Content-Type: application/json');
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header("Access-Control-Allow-Methods: GET,POST,PUT,DELETE");

    //GET
    if(isset($_GET['page']) && isset($_GET['count'])){
        $page = $_GET['page'];
        $count = $_GET['count'];
        if($page == 1)$page = 0;
        else{
            $page = ($page * $count) - $count;
        }
        $heroes = array_slice($heroes, $page, $count);

        array_push($data, $heroes);
        $data = array_combine($keys, $data);

        echo json_encode($data, JSON_UNESCAPED_UNICODE);
    }
    if(isset($_GET['heroId'])){
        $id = $_GET['heroId'];
        foreach($heroes as $key => $value){
            if($value['id'] == $id){
                
                echo json_encode($heroes[$key], JSON_UNESCAPED_UNICODE);
            }
        }
    }
    if(isset($_GET['deleteHeroById'])){
        $id = $_GET['deleteHeroById'];
        $result = $mysqli->query("delete from heroes where id={$id}");
    }

    //POST

    if(isset($_POST['nickname']) && 
        isset($_POST['realname']) &&
        isset($_POST['description']) &&
        isset($_POST['superpower']) &&
        isset($_POST['catch_phrase']) &&
        isset($_FILES['photo'])){

            

            $nickname = $_POST['nickname'];
            $realname = $_POST['realname'];
            $description = $_POST['description'];
            $superpower = $_POST['superpower'];
            $catch_phase = $_POST['catch_phrase'];

            $path = "images/".$_FILES['photo']['name'];
            

            if(move_uploaded_file($_FILES['photo']['tmp_name'], $path)){
                $path = "back/".$path;
                $result = $mysqli -> query("insert into heroes (nickname, real_name, origin_description, superpowers, catch_phase, images) values ('$nickname', '$realname', '$description', '$superpower', '$catch_phase', '$path')");
            }           
    }
    
    if(isset($_POST['updateNickname']) && 
        isset($_POST['updateRealname']) &&
        isset($_POST['updateDescription']) &&
        isset($_POST['updateSuperpower']) &&
        isset($_POST['updateCatch_phrase']) &&
        isset($_POST['id'])){

            $id = $_POST['id'];
            $nickname = $_POST['updateNickname'];
            $realname = $_POST['updateRealname'];
            $description = $_POST['updateDescription'];
            $superpower = $_POST['updateSuperpower'];
            $catch_phase = $_POST['updateCatch_phrase'];

            $result = $mysqli -> query("update heroes set nickname='$nickname', 
                                        real_name='$realname', 
                                        origin_description='$description', 
                                        superpowers='$superpower',
                                        catch_phase='$catch_phase'
                                        where id=$id");
            


        
    }




    
    
?>
