<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MedicinesSeeder extends Seeder
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
            иАПФ
            АРА
            ББ
            БКК дигидропиридиновые
            БКК недигидропиридиновые
            Статины
            Фибраты
            Эзетимиб
            Ингибиторы PCSK9
            АСК
            Клопидогрел
            Прасугрел
            Тикагрелол
            Нитраты/аналоги
            Диуретики тиазидные
            Диуретики петлевые
            Диуретики калийсберегающие
            Антикоагулянты (АВК)
            Антикоагулянты (НОАК)
            Прямые ингибиторы тромбина
            Антикоагулянты
            Ингибиторы фактора Ха
            Амиодарон
            Антиаритмики (1С класс)

        */
        
        /*
            «АСК» и/или «Клопидогрел» и/или «Прасугрел» и/или «Тикагрелол»
        */
        $medicines1 = [10, 11, 12, 13];

        $mass[] = ["name"=> "иАПФ", "number"=>1];
        $mass[] = ["name"=> "АРА", "number"=>2];
        $mass[] = ["name"=> "ББ", "number"=>3];
        $mass[] = ["name"=> "БКК дигидропиридиновые", "number"=>4];
        $mass[] = ["name"=> "БКК недигидропиридиновые", "number"=>5];
        $mass[] = ["name"=> "Статины", "number"=>6];
        $mass[] = ["name"=> "Фибраты", "number"=>7];
        $mass[] = ["name"=> "Эзетимиб", "number"=>8];
        $mass[] = ["name"=> "Ингибиторы PCSK9", "number"=>9];
        $mass[] = ["name"=> "АСК", "number"=>10];
        $mass[] = ["name"=> "Клопидогрел", "number"=>11];
        $mass[] = ["name"=> "Прасугрел", "number"=>12];
        $mass[] = ["name"=> "Тикагрелол", "number"=>13];
        $mass[] = ["name"=> "Нитраты/аналоги", "number"=>14];
        $mass[] = ["name"=> "Диуретики тиазидные", "number"=>15];
        $mass[] = ["name"=> "Диуретики петлевые", "number"=>16];
        $mass[] = ["name"=> "Диуретики калийсберегающие", "number"=>17];
        $mass[] = ["name"=> "Антикоагулянты (АВК)", "number"=>18];
        $mass[] = ["name"=> "Антикоагулянты (НОАК)", "number"=>19];
        $mass[] = ["name"=> "Прямые ингибиторы тромбина", "number"=>20];
        $mass[] = ["name"=> "Антикоагулянты", "number"=>21];
        $mass[] = ["name"=> "Ингибиторы фактора Ха", "number"=>22];
        $mass[] = ["name"=> "Амиодарон", "number"=>23];
        $mass[] = ["name"=> "Антиаритмики (1С класс)", "number"=>24];

        $c = count($mass);
        for($i=0;$i<$c;$i++) {
            DB::table('medicines')->insert([
                'medicine_name' => $mass[$i]['name'],
                'number' => $mass[$i]['number'],
            ]);
        }

    }
}
