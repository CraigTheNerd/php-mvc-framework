<?php

    class Post
    {
        //  Database property
        private $db;

        public function __construct()
        {
            //  Instantiate the Database Class
            $this->db = new Database();
        }

        public function getPosts()
        {
            $this->db->query("SELECT * FROM posts");

            return $this->db->resultSet();
        }
    }
