<?php
    //  Load Config
    require_once 'config/config.php';

    //  Load Libraries
//    require_once 'libraries/Core.php';
//    require_once 'libraries/Controller.php';
//    require_once 'libraries/Database.php';

    //  Autoload Core Libraries
    spl_autoload_register(function($className) {
        //  ClassName file must match Controller Name
        require_once 'libraries/' . $className . '.php';
    });