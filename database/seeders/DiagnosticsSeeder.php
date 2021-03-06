<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DiagnosticsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //

        /*
            ЭХОКГ	ФВЛЖ	Целое число (0-100)
             	КДР	Дробное число (0-10)
             	КСР	Дробное число (0-10)
             	КДО	Целое число (0-999)
             	КСО	Целое число (0-999)
             	ЛП (парастернальный)	Дробное число (0-10)
             	ЛП (апикальный)	Дробное число (0-10)
             	Недостаточность АК	Дробное число (0-4)
             	Площадь отверстия АК	Дробное число (0-10)
             	Пиковый градиент АК	Целое число (0-999)
             	Средний градиент АК	Целое число (0-100)
             	Недостаточность МК	Дробное число (0-4)
             	Площадь отверстия МК	Дробное число (0-10)
             	Пиковый градиент МК	Целое число (0-999)
             	Средний градиент МК	Целое число (0-100)
             	Недостаточность ТК	Дробное число (0-4)
             	Площадь отверстия ТК	Дробное число (0-10)
             	Пиковый градиент ТК	Целое число (0-999)
             	Средний градиент ТК	Целое число (0-100)
            ЭКГ	Синусовый ритм	Да/Нет
             	ФП	Да/Нет
             	ТП	Да/Нет
             	Другой регулярный ритм	Да/Нет
             	Ритм ЭКС	Да/Нет
             	Тахи-бради синдром	Да/Нет
            КАГ/ШГ	Атеросклероз	Да/Нет
             	Тип кровоснабжения	Правый/Левый
             	Ствол	Целое число (0-100)
             	ПМЖВ	Целое число (0-100)
             	ДВ	Целое число (0-100)
             	ОВ	Целое число (0-100)
             	ВТК	Целое число (0-100)
             	Интермедия	Целое число (0-100)
             	ЗМЖВ ОВ	Целое число (0-100)
             	ПКА	Целое число (0-100)
             	ЗМЖВ ПКА	Целое число (0-100)
             	ЗБВ ПКА	Целое число (0-100)
             	Шунты	Проходимы/Дисфункция
            ОАК	Гемоглобин	Целое число (0-300)
             	Гематокрит	Дробное число (0-100)
             	Эритроциты	Дробное число (0-10)
             	Лейкоциты	Дробное число (0-100)
             	Тромбоциты	Дробное число (0-999)
            БАК	Общий белок	Целое число (0-300)
             	Общий ХС	Дробное число (0-100)
             	ХС ЛПВН	Дробное число (0-100)
             	ХС ЛПНП	Дробное число (0-100)
             	Триглицериды	Дробное число (0-10)
             	Глюкоза крови	Дробное число (0-100)
             	Креатинин	Дробное число (0-999)
             	Мочевина	Дробное число (0-100)
             	Общий билирубин	Дробное число (0-100)
             	АЛТ	Целое число (0-999)
             	Натрий	Дробное число (0-999)
             	Калий	Дробное число (0-100)
             	МНО	Дробное число (0-10)
             	Гликированный гемоглобин	Дробное число (0-100)
             	Т3	Дробное число (0-999)
             	Т4	Дробное число (0-999)
             	ТТГ	Дробное число (0-999)

        */

        /*
            mas_i = [1,4,5,10,11,14,15,18,19,28,29,30,31,32,33,34,35,36,37,39,44,53]
            mas_f = [2,3,6,7,8,9,12,13,16,17,40,41,42,43,45,46,47,48,49,50,51,52,54,55,56,57,58,59,60]    
            mas_yes_no = [20,21,22,23,24,25,26]
            mas_left_right = [27]
            mas_others = [38]
            
        */

        $mass[] = ["group"=> "ЭХОКГ", "name"=> "ФВЛЖ", "group_no" => 1, "no"=>1 ];  //Целое число (0-100)
        $mass[] = ["group"=> "ЭХОКГ", "name"=> "КДР", "group_no" => 1, "no"=>2 ];   //Дробное число (0-10)
        $mass[] = ["group"=> "ЭХОКГ", "name"=> "КСР", "group_no" => 1, "no"=>3 ];   //Дробное число (0-10)
        $mass[] = ["group"=> "ЭХОКГ", "name"=> "КДО", "group_no" => 1, "no"=>4 ];   //Целое число (0-999)
        $mass[] = ["group"=> "ЭХОКГ", "name"=> "КСО", "group_no" => 1, "no"=>5 ];   //Целое число (0-999)
        $mass[] = ["group"=> "ЭХОКГ", "name"=> "ЛП (парастернальный)", "group_no" => 1, "no"=>6 ];  //Дробное число (0-10)
        $mass[] = ["group"=> "ЭХОКГ", "name"=> "ЛП (апикальный)", "group_no" => 1, "no"=>7 ];       //Дробное число (0-10)
        $mass[] = ["group"=> "ЭХОКГ", "name"=> "Недостаточность АК", "group_no" => 1, "no"=>8 ];    //Дробное число (0-4)
        $mass[] = ["group"=> "ЭХОКГ", "name"=> "Площадь отверстия АК", "group_no" => 1, "no"=>9 ];  //Дробное число (0-10)
        $mass[] = ["group"=> "ЭХОКГ", "name"=> "Пиковый градиент АК", "group_no" => 1, "no"=>10 ];  //Целое число (0-999)
        $mass[] = ["group"=> "ЭХОКГ", "name"=> "Средний градиент АК", "group_no" => 1, "no"=>11 ];  //Целое число (0-100)
        $mass[] = ["group"=> "ЭХОКГ", "name"=> "Недостаточность МК", "group_no" => 1, "no"=>12 ];   //Дробное число (0-4)
        $mass[] = ["group"=> "ЭХОКГ", "name"=> "Площадь отверстия МК", "group_no" => 1, "no"=>13 ]; //Дробное число (0-10)
        $mass[] = ["group"=> "ЭХОКГ", "name"=> "Пиковый градиент МК", "group_no" => 1, "no"=>14 ];  //Целое число (0-999)
        $mass[] = ["group"=> "ЭХОКГ", "name"=> "Средний градиент МК", "group_no" => 1, "no"=>15 ];  //Целое число (0-100)
        $mass[] = ["group"=> "ЭХОКГ", "name"=> "Недостаточность ТК", "group_no" => 1, "no"=>16 ];   //Дробное число (0-4)
        $mass[] = ["group"=> "ЭХОКГ", "name"=> "Площадь отверстия ТК", "group_no" => 1, "no"=>17 ]; //Дробное число (0-10)
        $mass[] = ["group"=> "ЭХОКГ", "name"=> "Пиковый градиент ТК", "group_no" => 1, "no"=>18 ];  //Целое число (0-999)
        $mass[] = ["group"=> "ЭХОКГ", "name"=> "Средний градиент ТК", "group_no" => 1, "no"=>19 ];  //Целое число (0-100)
        
        /*
            Синусовый ритм	Да/Нет
            ФП	Да/Нет
            ТП	Да/Нет
            Другой регулярный ритм	Да/Нет
            Ритм ЭКС	Да/Нет
            Тахи-бради синдром	Да/Нет


            

        */
        $mass[] = ["group"=> "ЭКГ", "name"=> "Синусовый ритм", "group_no" => 2, "no"=>20 ]; //Да/Нет
        $mass[] = ["group"=> "ЭКГ", "name"=> "ФП", "group_no" => 2, "no"=>21 ];             //Да/Нет
        $mass[] = ["group"=> "ЭКГ", "name"=> "ТП", "group_no" => 2, "no"=>22 ];             //Да/Нет
        $mass[] = ["group"=> "ЭКГ", "name"=> "Другой регулярный ритм", "group_no" => 2, "no"=>23 ]; //Да/Нет
        $mass[] = ["group"=> "ЭКГ", "name"=> "Ритм ЭКС", "group_no" => 2, "no"=>24 ];               //Да/Нет
        $mass[] = ["group"=> "ЭКГ", "name"=> "Тахи-бради синдром", "group_no" => 2, "no"=>25 ];     //Да/Нет
        

        /*
            
        */

        $mass[] = ["group"=> "КАГ/ШГ", "name"=> "Атеросклероз", "group_no" => 3, "no"=>26 ];        //Да/Нет
        $mass[] = ["group"=> "КАГ/ШГ", "name"=> "Тип кровоснабжения", "group_no" => 3, "no"=>27 ];  //Правый/Левый
        $mass[] = ["group"=> "КАГ/ШГ", "name"=> "Ствол", "group_no" => 3, "no"=>28 ];               //Целое число (0-100)
        $mass[] = ["group"=> "КАГ/ШГ", "name"=> "ПМЖВ", "group_no" => 3, "no"=>29 ];                //Целое число (0-100)
        $mass[] = ["group"=> "КАГ/ШГ", "name"=> "ДВ", "group_no" => 3, "no"=>30 ];                  //Целое число (0-100)
        $mass[] = ["group"=> "КАГ/ШГ", "name"=> "ОВ", "group_no" => 3, "no"=>31 ];                  //Целое число (0-100)
        $mass[] = ["group"=> "КАГ/ШГ", "name"=> "ВТК", "group_no" => 3, "no"=>32 ];                 //Целое число (0-100)
        $mass[] = ["group"=> "КАГ/ШГ", "name"=> "Интермедия", "group_no" => 3, "no"=>33 ];          //Целое число (0-100)
        $mass[] = ["group"=> "КАГ/ШГ", "name"=> "ЗМЖВ ОВ", "group_no" => 3, "no"=>34 ];             //Целое число (0-100)
        $mass[] = ["group"=> "КАГ/ШГ", "name"=> "ПКА", "group_no" => 3, "no"=>35 ];                 //Целое число (0-100)
        $mass[] = ["group"=> "КАГ/ШГ", "name"=> "ЗМЖВ ПКА", "group_no" => 3, "no"=>36 ];            //Целое число (0-100)
        $mass[] = ["group"=> "КАГ/ШГ", "name"=> "ЗБВ ПКА", "group_no" => 3, "no"=>37 ];             //Целое число (0-100)
        $mass[] = ["group"=> "КАГ/ШГ", "name"=> "Шунты", "group_no" => 3, "no"=>38 ];               //Проходимы/Дисфункция
        
        /*
            
        */
        $mass[] = ["group"=> "ОАК", "name"=> "Гемоглобин", "group_no" => 4, "no"=>39 ]; //Целое число (0-300)
        $mass[] = ["group"=> "ОАК", "name"=> "Гематокрит", "group_no" => 4, "no"=>40 ]; //Дробное число (0-100)
        $mass[] = ["group"=> "ОАК", "name"=> "Эритроциты", "group_no" => 4, "no"=>41 ]; //Дробное число (0-10)
        $mass[] = ["group"=> "ОАК", "name"=> "Лейкоциты", "group_no" => 4, "no"=>42 ];  //Дробное число (0-100)
        $mass[] = ["group"=> "ОАК", "name"=> "Тромбоциты", "group_no" => 4, "no"=>43 ]; //Дробное число (0-999)
        
        /*
            
        */

        $mass[] = ["group"=> "БАК", "name"=> "Общий белок", "group_no" => 5, "no"=>44 ];    //Целое число (0-300)
        $mass[] = ["group"=> "БАК", "name"=> "Общий ХС", "group_no" => 5, "no"=>45 ];       //Дробное число (0-100)
        $mass[] = ["group"=> "БАК", "name"=> "ХС ЛПВН", "group_no" => 5, "no"=>46 ];        //Дробное число (0-100)
        $mass[] = ["group"=> "БАК", "name"=> "ХС ЛПНП", "group_no" => 5, "no"=>47 ];        //Дробное число (0-100)
        $mass[] = ["group"=> "БАК", "name"=> "Триглицериды", "group_no" => 5, "no"=>48 ];   //Дробное число (0-10)
        $mass[] = ["group"=> "БАК", "name"=> "Глюкоза крови", "group_no" => 5, "no"=>49 ];  //Дробное число (0-100)
        $mass[] = ["group"=> "БАК", "name"=> "Креатинин", "group_no" => 5, "no"=>50 ];      //Дробное число (0-999)
        $mass[] = ["group"=> "БАК", "name"=> "Мочевина", "group_no" => 5, "no"=>51 ];       //Дробное число (0-100)
        $mass[] = ["group"=> "БАК", "name"=> "Общий билирубин", "group_no" => 5, "no"=>52 ];//Дробное число (0-100)
        $mass[] = ["group"=> "БАК", "name"=> "АЛТ", "group_no" => 5, "no"=>53 ];            //Целое число (0-999)
        $mass[] = ["group"=> "БАК", "name"=> "Натрий", "group_no" => 5, "no"=>54 ];         //Дробное число (0-999)
        $mass[] = ["group"=> "БАК", "name"=> "Калий", "group_no" => 5, "no"=>55 ];          //Дробное число (0-100)
        $mass[] = ["group"=> "БАК", "name"=> "МНО", "group_no" => 5, "no"=>56 ];            //Дробное число (0-10)
        $mass[] = ["group"=> "БАК", "name"=> "Гликированный гемоглобин", "group_no" => 5, "no"=>57 ];//Дробное число (0-100)
        $mass[] = ["group"=> "БАК", "name"=> "Т3", "group_no" => 5, "no"=>58 ];             //Дробное число (0-999)
        $mass[] = ["group"=> "БАК", "name"=> "Т4", "group_no" => 5, "no"=>59 ];             //Дробное число (0-999)
        $mass[] = ["group"=> "БАК", "name"=> "ТТГ", "group_no" => 5, "no"=>60 ];            //Дробное число (0-999)


        /*
            $table->string('group_name', 50);
            $table->string('diagnostic_name', 50);
            $table->integer('group_no')->unsigned()->nullable();
            $table->integer('number')->unsigned()->nullable();
        */

        $c = count($mass);
        for($i=0;$i<$c;$i++) {
            DB::table('diagnostics')->insert([
                'group_name' => $mass[$i]['group'],
                'diagnostic_name' => $mass[$i]['name'],
                'group_no' => $mass[$i]['group_no'],
                'number' => $mass[$i]['no'],
            ]);
        }

    }
}
