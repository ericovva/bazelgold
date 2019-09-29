<?php
    $msg_box = ""; // в этой переменной будем хранить сообщения формы
    $errors = array(); // контейнер для ошибок
    // проверяем корректность полей
    if($_POST['user_name'] == "")    $errors[] = "Поле 'Ваше имя' не заполнено!";
    if($_POST['user_tel'] == "")   $errors[] = "Поле 'Ваш номер телефона' не заполнено!";
    if($_POST['text_comment'] == "") $errors[] = "Поле 'Текст сообщения' не заполнено!";
 
    // если форма без ошибок
    if(empty($errors)){     
        // собираем данные из формы
        $message  = "Имя пользователя: " . $_POST['user_name'] . "<br/>";
        $message .= "Номер телефона пользователя: " . $_POST['user_tel'] . "<br/>";
        $message .= "Телефон: " . $_POST['text_comment'];      
        send_mail($message); // отправим письмо
        // выведем сообщение об успехе
        $msg_box = "Сообщение успешно отправлено!";
    }else{
        // если были ошибки, то выводим их
        $msg_box = ""; 
        foreach($errors as $one_error){
            $msg_box .= "$one_error";
        }
    }
 
    // делаем ответ на клиентскую часть в формате JSON
    echo json_encode(array(
        'result' => $msg_box
    ));
     
     
    // функция отправки письма
    function send_mail($message){
        // почта, на которую придет письмо
        $mail_to = "e.jidkov@gmail.com"; 
        // тема письма
        $subject = "Заявка с сайта bazegold";
         
        // заголовок письма
        $headers= "MIME-Version: 1.0\r\n";
        $headers .= "Content-type: text/html; charset=utf-8\r\n"; // кодировка письма
        $headers .= "From: Новая заявка\r\n"; // от кого письмо
         
        // отправляем письмо 
        mail($mail_to, $subject, $message, $headers);
    }
     
?>