<?php
class Pages extends Controller
{
    public function __construct()
    {
        //
    }

    //  Index method as default method
    public function index()
    {
        //  Dynamic data passed to view
        $data = [
            'title' => 'Home Page'
        ];
        $this->view('pages/index', $data);
    }

    //  About method to load the about page
    public function about()
    {
        $data = [
            'title' => 'About Page'
        ];
        $this->view('pages/about', $data);
    }
}