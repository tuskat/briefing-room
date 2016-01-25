<?php
    //open connection to mysql db
    
  
include 'offline.php';
//   include 'online.php';

$max = 4;
 
$lines = array(); 
    for ($i = 1; $i <= $max; $i++)
    {
            //fetch table rows from mysql db
            /*
            SELECT column FROM table
            ORDER BY RAND()
            LIMIT 1 
            */
       $sql = "select * from speech_bracket" . "_" . $i . " ORDER BY RAND() LIMIT 1";
 
    $result = mysqli_query($connection, $sql) or die("Error in Selecting " . mysqli_error($connection));
    
    $line = array();
    while($row =mysqli_fetch_assoc($result))
        {
            $line[] = $row;
            
        }
    //return $result;
        $lines[] = $line;
    }


     echo json_encode($lines); 
 

    //close the db connection
    mysqli_close($connection);
    
    
    
?>