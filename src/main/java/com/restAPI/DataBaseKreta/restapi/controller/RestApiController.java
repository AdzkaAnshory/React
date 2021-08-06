package com.restAPI.DataBaseKreta.restapi.controller;

import com.google.gson.Gson;
import com.restAPI.DataBaseKreta.database.model.User;
import com.restAPI.DataBaseKreta.database.model.Kereta;
import com.restAPI.DataBaseKreta.database.service.MyBatisService;
import com.restAPI.DataBaseKreta.database.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;
import java.util.concurrent.TimeoutException;


@RestController
@RequestMapping("/KeretaApi")
public class RestApiController {
    MyBatisService service = new MyBatisService();


    @GetMapping("/users")
    public ResponseEntity<List<User>> selectAllUser() throws IOException {
        List<User> users = UserService.selectAll();
        if(users.isEmpty()){
            return new ResponseEntity<>(users, HttpStatus.NOT_FOUND);
        }else{
            return new ResponseEntity<>(users, HttpStatus.OK);
        }
    }

    @PostMapping("/user/insert")
    public ResponseEntity<?> insertUser(@RequestBody User user) throws IOException, TimeoutException {
        if(UserService.insertUser(new Gson().toJson(user))==true) {
            return new ResponseEntity<>("" + user + "\n Isert Berhasil", HttpStatus.OK);
        }else{
            return new ResponseEntity<>("Insert Gagal", HttpStatus.NOT_FOUND);

        }
    }

    @PostMapping("/user/login")
    public ResponseEntity<?> login(@RequestBody User user) throws IOException, TimeoutException {
        String log = UserService.loginUser(new Gson().toJson(user));
        String username = user.getUsername();
        if(log.equals("berhasil")) {
            return new ResponseEntity<>(""+username+" Berhasil Login", HttpStatus.OK);
        }else if(log.equals("sudah")){
            return new ResponseEntity<>(""+username+" Anda Sudah Login", HttpStatus.OK);
        }else{
            return new ResponseEntity<>("Login Gagal", HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/user/update/{id}")
    public ResponseEntity<?> updateUser(@RequestBody User user, @PathVariable int id){
        user.setId(id);
        try {
            UserService.updateUser(new Gson().toJson(user));
        }catch (Exception e){
            System.out.println("error = " + e);
        }
        return new ResponseEntity<>("Update User Berhasil", HttpStatus.OK);
    }

    @PostMapping("/user/logout")
    public ResponseEntity<?> logout(@RequestBody String email) throws IOException, TimeoutException {
        String log = UserService.logoutUser(email);
        if(log.equals("berhasil")) {
            return new ResponseEntity<>(""+email+" Berhasil Logout ", HttpStatus.OK);
        }else {
            return new ResponseEntity<>("Logout "+email+" Gagal", HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/insert/kereta")
    public ResponseEntity<?> insertKereta(@RequestBody Kereta kereta) throws IOException, TimeoutException {
        if(service.saveKereta(new Gson().toJson(kereta))==true) {
            return new ResponseEntity<>("Insert Berhasil", HttpStatus.OK);
        }else{
            return new ResponseEntity<>("Insert Gagal", HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/insert/jadwal")
    public ResponseEntity<?> insertJadwal(@RequestBody Kereta kereta) throws IOException {
        if(service.saveJadwal(new Gson().toJson(kereta))==true) {
            return new ResponseEntity<>("Insert Berhasil", HttpStatus.OK);
        }else{
            return new ResponseEntity<>("Insert Gagal", HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/insert/kursi")
    public ResponseEntity<?> insertKursi(@RequestBody Kereta kereta) throws IOException {
        if(service.saveKursi(new Gson().toJson(kereta))==true) {
            return new ResponseEntity<>("Insert Berhasil", HttpStatus.OK);
        }else{
            return new ResponseEntity<>("Insert Gagal", HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/kereta")
    public ResponseEntity<List<Kereta>> selectAll() throws IOException {
        List<Kereta> keretas = service.selectAll();
        if(keretas.isEmpty()){
            return new ResponseEntity<>(keretas, HttpStatus.NOT_FOUND);
        }else{
            return new ResponseEntity<>(keretas, HttpStatus.OK);
        }
    }

    @GetMapping("/kereta/{asal}/{tujuan}/{status_kursi}")
    public ResponseEntity<List<Kereta>> selectBandung(@PathVariable String asal, @PathVariable String tujuan, @PathVariable String status_kursi) throws IOException {
        List<Kereta> keretas = service.selectAsal(asal, tujuan, status_kursi);
        if(keretas.isEmpty()){
            return new ResponseEntity<>(keretas, HttpStatus.NOT_FOUND);
        }else{
            return new ResponseEntity<>(keretas, HttpStatus.OK);
        }
    }

    @PutMapping("/update/kereta/{id}")
    public ResponseEntity<?> updateKeretaById(@RequestBody Kereta kereta, @PathVariable int id) throws IOException {
        kereta.setId(id);
        if(service.updateKeretaById(new Gson().toJson(kereta))==true) {
            return new ResponseEntity<>("Update Berhasil", HttpStatus.OK);
        }else{
            return new ResponseEntity<>("Update Gagal", HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/update/jadwal/{id}")
    public ResponseEntity<?> updateJadwalById(@RequestBody Kereta kereta, @PathVariable int id) throws IOException {
        kereta.setId_jadwal(id);
        if(service.updateJadwalById(new Gson().toJson(kereta))==true) {
            return new ResponseEntity<>("Update Berhasil", HttpStatus.OK);
        }else{
            return new ResponseEntity<>("Update Gagal", HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/update/kursi/{id}")
    public ResponseEntity<?> updateKursiById(@RequestBody Kereta kereta, @PathVariable int id) throws IOException {
        kereta.setId_kursi(id);
        if(service.updateKursiById(new Gson().toJson(kereta))==true) {
            return new ResponseEntity<>("Update Berhasil", HttpStatus.OK);
        }else{
            return new ResponseEntity<>("Update Gagal", HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/update/kursi/{id_jadwal}/{no_kursi}")
    public ResponseEntity<?> updateStatusKursi(@RequestBody Kereta kereta, @PathVariable int id_jadwal, @PathVariable String no_kursi) throws IOException {
        kereta.setId_jadwal(id_jadwal);
        kereta.setNo_kursi(no_kursi);
        if(service.updateKursiById(new Gson().toJson(kereta))==true) {
            return new ResponseEntity<>("Update Berhasil", HttpStatus.OK);
        }else{
            return new ResponseEntity<>("Update Gagal", HttpStatus.NOT_FOUND);
        }
    }
}

