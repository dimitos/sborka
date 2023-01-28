<?
    /**
     * Класс данных для страницы объектов
     */
    class HomePage extends Page
    {
        /**
         * @param int $code
         * @param string $eng
         * @throws Exception
         */
        public function __construct(int $code, string $eng)
        {
            parent::__construct($code, $eng, "Home");
        }

        /**
         * @return Page
         * @throws Exception
         */
        public static function code200(): Page
        {
            return new HomePage(200, "home");
        }
    }
