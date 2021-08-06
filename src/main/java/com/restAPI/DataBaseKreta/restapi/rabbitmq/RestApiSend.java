package com.restAPI.DataBaseKreta.restapi.rabbitmq;

import com.rabbitmq.client.Channel;
import com.rabbitmq.client.Connection;
import com.rabbitmq.client.ConnectionFactory;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.concurrent.TimeoutException;

public class RestApiSend {

    public void insertSiswa(String siswaString) throws IOException, TimeoutException {
        ConnectionFactory factory = new ConnectionFactory();
        factory.setHost("localhost");
        try (Connection connection = factory.newConnection();
             Channel channel = connection.createChannel()) {
            channel.queueDeclare("insertSiswa", false, false, false, null);
            channel.basicPublish("", "insertSiswa", null, siswaString.getBytes(StandardCharsets.UTF_8));
            System.out.println(" [x] Sent '" + siswaString + "'");
        }
    }

    public void deleteSiswaById(String idString) throws IOException, TimeoutException {
        ConnectionFactory factory = new ConnectionFactory();
        factory.setHost("localhost");
        try (Connection connection = factory.newConnection();
             Channel channel = connection.createChannel()) {
            channel.queueDeclare("deleteSiswaById", false, false, false, null);
            //String message = "Assalamualaikum";
            channel.basicPublish("", "deleteSiswaById", null, idString.getBytes(StandardCharsets.UTF_8));
            System.out.println(" [x] Sent '" + idString + "'");
        }
    }

    public void updateSiswaById(String siswaString) throws IOException, TimeoutException {
        ConnectionFactory factory = new ConnectionFactory();
        factory.setHost("localhost");
        try (Connection connection = factory.newConnection();
             Channel channel = connection.createChannel()) {
            channel.queueDeclare("updateSiswaById", false, false, false, null);
            //String message = "Assalamualaikum";
            channel.basicPublish("", "updateSiswaById", null, siswaString.getBytes(StandardCharsets.UTF_8));
            System.out.println(" [x] Sent '" + siswaString + "'");
        }
    }

    public void insertUser(String user) throws IOException, TimeoutException{
        ConnectionFactory factory = new ConnectionFactory();
        factory.setHost("localhost");
        try (Connection connection = factory.newConnection();
             Channel channel = connection.createChannel()) {
            channel.queueDeclare("insertUser", false, false, false, null);
            channel.basicPublish("", "insertUser", null,user.getBytes(StandardCharsets.UTF_8));
            System.out.println(" [x] Sent '" + user + "'");
        }
    }

    public void loginUser(String user) throws IOException, TimeoutException {
        ConnectionFactory factory = new ConnectionFactory();
        factory.setHost("localhost");
        try (Connection connection = factory.newConnection();
             Channel channel = connection.createChannel()) {
            channel.queueDeclare("loginUser", false, false, false, null);
            channel.basicPublish("", "loginUser", null, user.getBytes(StandardCharsets.UTF_8));
            System.out.println(" [x] Sent '" + user + "'");
        }
    }


    public void updateUserById(String userString) throws IOException, TimeoutException {
        ConnectionFactory factory = new ConnectionFactory();
        factory.setHost("localhost");
        try (Connection connection = factory.newConnection();
             Channel channel = connection.createChannel()) {
            channel.queueDeclare("updateUser", false, false, false, null);
            //String message = "Assalamualaikum";
            channel.basicPublish("", "updateUser", null, userString.getBytes(StandardCharsets.UTF_8));
            System.out.println(" [x] Sent '" + userString + "'");
        }
    }

    public void logoutUser(String email) throws IOException, TimeoutException{
        ConnectionFactory factory = new ConnectionFactory();
        factory.setHost("localhost");
        try (Connection connection = factory.newConnection();
             Channel channel = connection.createChannel()) {
            channel.queueDeclare("logoutUser", false, false, false, null);
            channel.basicPublish("", "logoutUser", null, email.getBytes(StandardCharsets.UTF_8));
            System.out.println(" [x] Sent '" + email + "'");
        }
    }

    public void deleteUserById(String toString) throws IOException, TimeoutException{
        ConnectionFactory factory = new ConnectionFactory();
        factory.setHost("localhost");
        try (Connection connection = factory.newConnection();
             Channel channel = connection.createChannel()) {
            channel.queueDeclare("deleteUser", false, false, false, null);
            channel.basicPublish("", "deleteUser", null, toString.getBytes(StandardCharsets.UTF_8));
            System.out.println(" [x] Sent '" + toString + "'");
        }
    }
}
