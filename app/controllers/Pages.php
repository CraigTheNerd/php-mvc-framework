<?php
class Pages extends Controller
{
    public function __construct()
    {
        //  Load models here
    }

    //  Index method as default method
    public function index()
    {
        //  Dynamic data passed to view
        $data = [
            'title' => 'PHP OOP MVC Framework',
        ];

        //  Return View
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