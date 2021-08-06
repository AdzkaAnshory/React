package com.restAPI.DataBaseKreta.database.model;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class User {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private int id;

    private String nama;
    private String username;
    private String password;
    private String jabatan;
    private String status;

    public User(){}
    public User(int id, String nama, String username, String password, String jabatan, String status){
        this.id = id;
        this.username = username;
        this.nama = nama;
        this.password = password;
        this.jabatan = jabatan;
        this.status = status;
    }

    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public void setNama(String nama) { this.nama = nama; }
    public String getNama() { return nama; }

    public void setUsername(String username) { this.username = username; }
    public String getUsername() { return username; }

    public void setPassword(String password) { this.password = password; }
    public String getPassword() { return password; }

    public String getJabatan() { return jabatan; }
    public void setJabatan(String jabatan) { this.jabatan = jabatan; }

    public void setStatus(String status) { this.status = status; }
    public String getStatus() { return status; }

    @Override
    public String toString(){
        return "{"+
                "id_user:" +this.id+
                ", fullname:" + this.nama +
                ", username:" + this.username +
                ", password:" + this.password +
                ", phone:" + this.jabatan +
                "}";
    }
}
