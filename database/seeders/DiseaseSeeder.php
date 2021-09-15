<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DiseaseSeeder extends Seeder
{

    
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {   
        /*
            ИБС	Стенокардия 1
             	Стенокардия 2
             	Стенокардия 3
             	Стенокардия 4
             	Перенесенный ИМ
             	Безболевая ИБС
             	Аневризма ЛЖ
            ХСН	ФК (NYHA) 1
             	ФК (NYHA) 2
             	ФК (NYHA) 3
             	ФК (NYHA) 4
            ВПС	ДМПП
             	ДМЖП
             	Порок АК
             	Порок МК
             	Порок ТК (не ан. Эбштейна)
             	Тетрада Фалло
             	ЧАДЛВ
             	ТМА
             	АВК
             	ЧАВК
             	Ан. Эбштейна
            ППС	Порок АК
             	Порок МК
             	Порок ТК
            НРС	ФП
             	ТП
             	ЖТ
             	ФЖ/ВСС
             	НЖТ
             	ЧЖЭ
             	СССУ
             	АВ-блокады
             	СУ QT
            АГ	АГ
            КМП	ГКМП
             	ДКМП
             	РКМП
            Легочная гипертензия	Легочная гипертензия
            Периферический атеросклероз	Атеросклероз БЦА
             	Атеросклероз артерий конечностей
            Нарушение мозгового кровообращения	Инсульт
             	ТИА
            Сахарный диабет	Инсулин-зависимый
             	Инсулин-независимый
            Патология аорты	Аневризма аорты
             	Коарктация аорты
            Сопутствующие заболевания	ХОБЛ
             	ХБП
             	Патология печени
             	Онкозаболевание
             	Язвенная болезнь Ж/12ПК

        */
        /*
            «Назначены дезагреганты при атеросклерозе»
            Если выбрано: «ИБС» и/или «Периферический атеросклероз», то должно быть выбрано «АСК» и/или «Клопидогрел» и/или «Прасугрел» и/или «Тикагрелол», если нет противопоказаний (ПП).
        */
        $groups_diseases1 = [1, 8];
        $medicines1 = [10, 11, 12, 13];

        /*
            Если выбрано: «ИБС» и/или «Периферический атеросклероз», то должно быть выбрано «Статины», если нет противопоказаний (ПП).
        */
        $groups_diseases2 = [1, 8];
        $medicines2 = [6];
        
        /*
            Если в ячейке «Статины» выбрана категория «есть», то в ячейке «АСТ» и «АЛТ» должно стоять какое-либо значение, датированное менее 12-ю месяцами.
        */
        $medicines3 = [6];
        $diagnostics = [53];//value < 12

        /*
            Назначены инг АПФ/АРА при ИБС + ХСН и/или АГ и/или СД и/или ХБП»
        Если в ячейке «ИБС» выбрана категория «есть» и в любой из следующих ячеек: «ХСН» и/или «АГ» и/или  «СД» и/или «ХБП» выбрана категория «есть», то в ячейке «инг АПФ» или в ячейке «АРА» должна быть выбрана категория «есть», если нет ПП.

        */

        $mass[] = ["group"=> "ИБС", "name"=> "Стенокардия 1", "group_no"=>1, "no"=>1];
        $mass[] = ["group"=> "ИБС", "name"=> "Стенокардия 2", "group_no"=>1, "no"=>2];
        $mass[] = ["group"=> "ИБС", "name"=> "Стенокардия 3", "group_no"=>1, "no"=>3];
        $mass[] = ["group"=> "ИБС", "name"=> "Стенокардия 4", "group_no"=>1, "no"=>4];
        $mass[] = ["group"=> "ИБС", "name"=> "Перенесенный ИМ", "group_no"=>1, "no"=>5];
        $mass[] = ["group"=> "ИБС", "name"=> "Безболевая ИБС", "group_no"=>1, "no"=>6];
        $mass[] = ["group"=> "ИБС", "name"=> "Аневризма ЛЖ", "group_no"=>1, "no"=>7];
        $mass[] = ["group"=> "ХСН", "name"=> "ФК (NYHA) 1", "group_no"=>1, "no"=>8];
        $mass[] = ["group"=> "ХСН", "name"=> "ФК (NYHA) 2", "group_no"=>1, "no"=>9];
        $mass[] = ["group"=> "ХСН", "name"=> "ФК (NYHA) 3", "group_no"=>1, "no"=>10];
        $mass[] = ["group"=> "ХСН", "name"=> "ФК (NYHA) 4", "group_no"=>1, "no"=>11];
        
        

        $mass[] = ["group"=> "ВПС", "name"=> "ДМПП", "group_no"=>2, "no"=>12];
        $mass[] = ["group"=> "ВПС", "name"=> "ДМЖП", "group_no"=>2, "no"=>13];
        $mass[] = ["group"=> "ВПС", "name"=> "Порок АК", "group_no"=>2, "no"=>14];
        $mass[] = ["group"=> "ВПС", "name"=> "Порок МК", "group_no"=>2, "no"=>15];
        $mass[] = ["group"=> "ВПС", "name"=> "Порок ТК (не ан. Эбштейна)", "group_no"=>2, "no"=>16];
        $mass[] = ["group"=> "ВПС", "name"=> "Тетрада Фалло", "group_no"=>2, "no"=>17];
        $mass[] = ["group"=> "ВПС", "name"=> "ЧАДЛВ", "group_no"=>2, "no"=>18];
        $mass[] = ["group"=> "ВПС", "name"=> "ТМА", "group_no"=>2, "no"=>19];
        $mass[] = ["group"=> "ВПС", "name"=> "АВК", "group_no"=>2, "no"=>20];
        $mass[] = ["group"=> "ВПС", "name"=> "ЧАВК", "group_no"=>2, "no"=>21];
        $mass[] = ["group"=> "ВПС", "name"=> "Ан. Эбштейна", "group_no"=>2, "no"=>22];
        
        $mass[] = ["group"=> "ППС", "name"=> "Порок АК", "group_no"=>3, "no"=>23];
        $mass[] = ["group"=> "ППС", "name"=> "Порок МК", "group_no"=>3, "no"=>24];
        $mass[] = ["group"=> "ППС", "name"=> "Порок ТК", "group_no"=>3, "no"=>25];

        $mass[] = ["group"=> "НРС", "name"=> "ФП", "group_no"=>4, "no"=>26];
        $mass[] = ["group"=> "НРС", "name"=> "ТП", "group_no"=>4, "no"=>27];
        $mass[] = ["group"=> "НРС", "name"=> "ЖТ", "group_no"=>4, "no"=>28];
        $mass[] = ["group"=> "НРС", "name"=> "ФЖ/ВСС", "group_no"=>4, "no"=>29];
        $mass[] = ["group"=> "НРС", "name"=> "НЖТ", "group_no"=>4, "no"=>30];
        $mass[] = ["group"=> "НРС", "name"=> "ЧЖЭ", "group_no"=>4, "no"=>31];
        $mass[] = ["group"=> "НРС", "name"=> "СССУ", "group_no"=>4, "no"=>32];
        $mass[] = ["group"=> "НРС", "name"=> "АВ-блокады", "group_no"=>4, "no"=>33];
        $mass[] = ["group"=> "НРС", "name"=> "СУ QT", "group_no"=>4, "no"=>34];

        /*
            
        */

        $mass[] = ["group"=> "АГ", "name"=> "АГ", "group_no"=>5, "no"=>35];

        $mass[] = ["group"=> "КМП", "name"=> "ГКМП", "group_no"=>6, "no"=>36];
        $mass[] = ["group"=> "КМП", "name"=> "ДКМП", "group_no"=>6, "no"=>37];
        $mass[] = ["group"=> "КМП", "name"=> "РКМП", "group_no"=>6, "no"=>38];

        $mass[] = ["group"=> "Легочная гипертензия", "name"=> "Легочная гипертензия", "group_no"=>7, "no"=>39];

        $mass[] = ["group"=> "Периферический атеросклероз", "name"=> "Атеросклероз БЦА", "group_no"=>8, "no"=>40];
        $mass[] = ["group"=> "Периферический атеросклероз", "name"=> "Атеросклероз артерий конечностей", "group_no"=>8, "no"=>41];

        $mass[] = ["group"=> "Нарушение мозгового кровообращения", "name"=> "Инсульт", "group_no"=>9, "no"=>42];
        $mass[] = ["group"=> "Нарушение мозгового кровообращения", "name"=> "ТИА", "group_no"=>9, "no"=>43];

        /*
        
        */

        $mass[] = ["group"=> "Сахарный диабет", "name"=> "Инсулин-зависимый", "group_no"=>10, "no"=>44];
        $mass[] = ["group"=> "Сахарный диабет", "name"=> "Инсулин-независимый", "group_no"=>10, "no"=>45];

        $mass[] = ["group"=> "Патология аорты", "name"=> "Аневризма аорты", "group_no"=>11, "no"=>46];
        $mass[] = ["group"=> "Патология аорты", "name"=> "Коарктация аорты", "group_no"=>11, "no"=>47];

        $mass[] = ["group"=> "Сопутствующие заболевания	ХОБЛ", "name"=> "ХОБЛ", "group_no"=>12, "no"=>48];
        $mass[] = ["group"=> "Сопутствующие заболевания	ХОБЛ", "name"=> "ХБП", "group_no"=>12, "no"=>49];
        $mass[] = ["group"=> "Сопутствующие заболевания	ХОБЛ", "name"=> "Патология печени", "group_no"=>12, "no"=>50];
        $mass[] = ["group"=> "Сопутствующие заболевания	ХОБЛ", "name"=> "Онкозаболевание", "group_no"=>12, "no"=>51];
        $mass[] = ["group"=> "Сопутствующие заболевания	ХОБЛ", "name"=> "Язвенная болезнь Ж/12ПК", "group_no"=>12, "no"=>52];
        
              
        /*
            $table->string('group_name', 50);
            $table->string('disease_name', 50);

            $table->integer('group_no')->unsigned()->nullable();
            $table->integer('number')->unsigned()->nullable();
        */
        //
        $c = count($mass);
        for($i=0;$i<$c;$i++) {
            DB::table('diseases')->insert([
                'group_name' => $mass[$i]['group'],
                'disease_name' => $mass[$i]['name'],
                'group_no' => $mass[$i]['group_no'],
                'number' => $mass[$i]['no'],
            ]);
        }
        

        /*
            $table->string('group_name', 50);
            $table->string('disease_name', 50);
        */
    }
}
