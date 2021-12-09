<?php
    /*
     *  App Core Class
     *  Creates URL & loads core controller
     * URL FORMAT - /controller/method/params
     */

class Core
{
    //  Default controller
    protected $currentController = 'Pages';
    protected $currentMethod = 'index';
    protected $params = [];

    public function __construct()
    {
        $this->getUrl();
    }

    //  Gets the requested url
    public function getUrl()
    {
        echo $_GET['url'];
    }
}