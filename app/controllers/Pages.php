<?php
class Pages extends Controller
{
    public function __construct()
    {
        //
        $this->postModel = $this->model('Post');
    }

    //  Index method as default method
    public function index()
    {
        $posts = $this->postModel->getPosts();

        //  Dynamic data passed to view
        $data = [
            'title' => 'Home Page',
            'posts' => $posts
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