<?
    /**
     * Класс данных для метатегов
     */
    class Meta
    {
        public string
            $title = "Строительная компания",
            $description = "Строительная компания",
            $keywords = "Строительная компания",
            $image = "/img/og-image.jpg",
            $h1 = "Строительная компания",
            $url;

        /**
         * Meta constructor
         */
        public function __construct()
        {
            $this->url = get_current_url(false);
        }
    }
