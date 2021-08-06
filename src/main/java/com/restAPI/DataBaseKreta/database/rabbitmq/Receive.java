package com.restAPI.DataBaseKreta.database.rabbitmq;


import com.rabbitmq.client.Channel;
import com.rabbitmq.client.Connection;
import com.rabbitmq.client.ConnectionFactory;
import com.rabbitmq.client.DeliverCallback;
import com.restAPI.DataBaseKreta.database.service.MyBatisService;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.concurrent.TimeoutException;

public class Receive {

    private ConnectionFactory factory;
    private Connection connection;
    private Channel channel;
    private MyBatisService myBatisService = new MyBatisService();
//    private Adapter adapter = new Adapter();


    public void connectRabbitMQ() throws IOException, TimeoutException {
        factory = new ConnectionFactory();
        factory.setHost("localhost");
        connection = factory.newConnection();
    }

    public void getJadwal() {
        try{
            connectRabbitMQ();
            channel = connection.createChannel();
            channel.queueDeclare("getJadwal", false, false, false, null);
            DeliverCallback deliverCallback = (consumerTag, delivery) -> {
                String msg = new String(delivery.getBody(), StandardCharsets.UTF_8);
                System.out.println(" [x] Received '" + msg + "'");
                MyBatisService.getJadwal(msg);
            };
            channel.basicConsume("getJadwal", true, deliverCallback, consumerTag -> { });
        }catch (Exception e) {
            System.out.println("Error getJadwal = " + e);
        }
    }

//    public void insertUser() {
//        try{
//            connectRabbitMQ();
//            channel = connection.createChannel();
//            channel.queueDeclare("insertUser", false, false, false, null);
//            //System.out.println(" [*] Waiting for messages..");
//            DeliverCallback deliverCallback = (consumerTag, delivery) -> {
//                String userString = new String(delivery.getBody(), StandardCharsets.UTF_8);
//                System.out.println(" [x] Received '" + userString + "'");
//                try {
//                    UserService.insertUser(userString);
//                } catch (TimeoutException e) {
//                    e.printStackTrace();
//                }
//            };
//            channel.basicConsume("insertUser", true, deliverCallback, consumerTag -> { });
//        }catch (Exception e) {
//            System.out.println("Error insertUser = " + e);
//        }
//    }
//
//    public void updateUserById() {
//        try{
//            connectRabbitMQ();
//            channel = connection.createChannel();
//            channel.queueDeclare("updateUser", false, false, false, null);
//            //System.out.println(" [*] Waiting for messages..");
//            DeliverCallback deliverCallback = (consumerTag, delivery) -> {
//                String userString = new String(delivery.getBody(), StandardCharsets.UTF_8);
//                System.out.println(" [x] Received '" + userString + "'");
//                try {
//                    UserService.updateUser(userString);
//                } catch (TimeoutException e) {
//                    e.printStackTrace();
//                }
//            };
//            channel.basicConsume("updateUser", true, deliverCallback, consumerTag -> { });
//        }catch (Exception e) {
//            System.out.println("Error updateUser = " + e);
//        }
//    }
//
//    public void logoutUser() {
//        try{
//            connectRabbitMQ();
//            channel = connection.createChannel();
//            channel.queueDeclare("logoutUser", false, false, false, null);
//            //System.out.println(" [*] Waiting for messages..");
//            DeliverCallback deliverCallback = (consumerTag, delivery) -> {
//                String userString = new String(delivery.getBody(), StandardCharsets.UTF_8);
//                System.out.println(" [x] Received '" + userString + "'");
//                try {
//                    UserService.logoutUser(userString);
//                } catch (TimeoutException e) {
//                    e.printStackTrace();
//                }
//            };
//            channel.basicConsume("logoutUser", true, deliverCallback, consumerTag -> { });
//        }catch (Exception e) {
//            System.out.println("Error updateUser = " + e);
//        }
//    }


}
