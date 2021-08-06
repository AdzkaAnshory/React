package com.restAPI.DataBaseKreta.database;

import com.restAPI.DataBaseKreta.database.rabbitmq.Receive;

//Receive (RabbitMQ) -> MyBatisService -> Database -> Send (RabbitMQ)

public class DatabaseMain {

    public static Receive receive = new Receive();

    public static void main(String[] args) {
        try{
            System.out.println(" [*] Waiting for messages..");
            receive.getJadwal();
        }catch (Exception e){
            System.out.println("Error DatabaseMain = " + e);
        }
    }
}
