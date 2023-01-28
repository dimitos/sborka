<?

    /**
     * @param LeadCenterGarantiya $garantiya_send
     * @return array
     */
    function format_callme_post_data(LeadCenterGarantiya $garantiya_send): array
    {
        $name = "";
        $phone = $garantiya_send::normalize_phone($_POST["phone"]);
        $email = "";
        $comment = "";
        $roistat = "";
        $metrika_id = "";
        $metrika_counter = "";
        $from = "";
        $ip = get_user_ip();
        $SITENAME = $_SERVER["HTTP_HOST"];
        if (isset($_POST["name"])) {
            $name = $_POST["name"];
        }
        if (isset($_POST["email"])) {
            $email = $_POST["email"];
        }
        if (isset($_POST["comment"]) && ($_POST["comment"])) {
            $comment = $_POST["comment"];
        }
        if (isset($_POST["roistat"]) && ($_POST["roistat"])) {
            $roistat = $_POST["roistat"];
        } elseif (isset($_COOKIE["roistat_visit"]) && $_COOKIE["roistat_visit"]) {
            $roistat = $_COOKIE["roistat_visit"];
        }
        if (isset($_POST["metrika_id"]) && ($_POST["metrika_id"])) {
            $metrika_id = $_POST["metrika_id"];
        } elseif (array_key_exists("_ym_uid", $_COOKIE)) {
            $metrika_id = $_COOKIE["_ym_uid"];
        }
        if (isset($_POST["metrika_counter"]) && ($_POST["metrika_counter"])) {
            $metrika_counter = $_POST["metrika_counter"];
        } elseif (array_key_exists("_ym_uid", $_COOKIE)) {
            $metrika_counter = "86086167";
        }
        if (isset($_POST["from"]) && ($_POST["from"])) {
            $from = $_POST["from"];
        }
        if (isset($_POST["domain"]) && ($_POST["domain"])) {
            $SITENAME = $_POST["domain"];
        }
        $referer = new Referer();

        return [$name, $phone, $email, $comment, $roistat, $metrika_id, $metrika_counter, $from, $ip, $SITENAME, $referer];
    }

    /**
     * Проверка возможности отправки смс-кода
     * @param $id
     * @param $field
     * @return bool
     */
    function lead_check_can_send($id, $field): bool
    {
        $can_send = true;
        if ($id) {
            $query = "SELECT * FROM WI_REQUEST_SMS WHERE (WI_REQUEST_SMS_$field = '$id') AND (DATE(WI_REQUEST_SMS_DATETIME) > (CURDATE() - INTERVAL 3 DAY)) ORDER BY WI_REQUEST_SMS_DATETIME DESC";
            $res = db_query($query);
            if (db_num_rows($res) > 2) {
                $can_send = false;
            }
        }
        return $can_send;
    }

    /**
     * Генерация случайной строки
     * @param int $length
     * @param false $only_numbers
     * @return string
     */
    function generate_random_string(int $length = 10, bool $only_numbers = false): string
    {
        $characters = "123456789abcdefghijkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ()";
        if ($only_numbers) {
            $characters = "1234567890";
        }
        $charactersLength = strlen($characters);
        $randomString = "";
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }
        return $randomString;
    }

    /**
     * Отправляем смс
     * @param string $phone
     * @param string $message
     * @return string
     */
    function send_sms(string $phone, string $message): string
    {
        if (!preg_match("/^38.*/", $phone)) {
            return file_get_contents("https://smsc.ru/sys/send.php?login=" . urlencode($_ENV["SMSC_LOGIN"]) . "&psw=" . urlencode($_ENV["SMSC_PASSWORD"]) . "&sender=SKGarantiya&phones=" . urlencode($phone) . "&mes=" . urlencode(iconv("UTF-8", "windows-1251", $message)));
        }

        return "";
    }
