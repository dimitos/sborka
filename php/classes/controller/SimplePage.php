<?

    /**
     * Класс данных для простой страницы
     */
    class SimplePage extends Page
    {

        /**
         * @param int $code
         * @param string $eng
         * @param string $title
         * @throws Exception
         */
        public function __construct(int $code, string $eng, string $title)
        {
            parent::__construct($code, $eng, $title);
        }

        /**
         * @param string $eng
         * @param string $title
         * @return SimplePage
         * @throws Exception
         */
        public static function code200(string $eng, string $title = ""): SimplePage
        {
            return new SimplePage(200, $eng, $title);
        }
    }
