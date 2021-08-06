package com.restAPI.DataBaseKreta.restapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

//Program Springboot, RabbitMQ dan MyBatis
//PostMan -> RestApiController -> RestApiSend (RabbitMQ)

@SpringBootApplication
public class RestApiMain {
	public static void main(String[] args) {
		SpringApplication.run(RestApiMain.class, args);
	}
}
