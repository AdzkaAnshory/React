package com.restAPI.DataBaseKreta.database.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Kereta {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int id_kereta;
    private int id_jadwal;
    private int id_kursi;
    private String nama;
    private String kelas;
    private String tgl_pergi;
    private String jam_pergi;
    private String jam_sampai;
    private String lama_perjalanan;
    private String asal;
    private String tujuan;
    private String harga;
    private String no_kursi;
    private String status_kursi;

    public Kereta() {
    }

    public Kereta(int id, String nama, String kelas, int id_jadwal, int id_kereta, String tgl_pergi, String jam_pergi, String jam_sampai, String lama_perjalanan
            , String asal, String tujuan, String harga, int id_kursi, String no_kursi, String status_kursi) {
        this.id = id;
        this.nama = nama;
        this.id_kereta = id_kereta;
        this.id_jadwal = id_jadwal;
        this.kelas = kelas;
        this.tgl_pergi = tgl_pergi;
        this.jam_pergi = jam_pergi;
        this.jam_sampai = jam_sampai;
        this.lama_perjalanan = lama_perjalanan;
        this.asal = asal;
        this.tujuan = tujuan;
        this.harga = harga;
        this.id_kursi = id_kursi;
        this.no_kursi = no_kursi;
        this.status_kursi = status_kursi;
    }

    public Kereta(Integer id, String nama, String kelas, String tgl_pergi, String jam_pergi, String jam_sampai, String lama_perjalanan, String asal, String tujuan, String harga, String no_kursi, String status_kursi) {
        this.id = id;
        this.nama = nama;
        this.kelas = kelas;
        this.tgl_pergi = tgl_pergi;
        this.jam_pergi = jam_pergi;
        this.jam_sampai = jam_sampai;
        this.lama_perjalanan = lama_perjalanan;
        this.asal = asal;
        this.tujuan = tujuan;
        this.harga = harga;
        this.no_kursi = no_kursi;
        this.status_kursi = status_kursi;
    }

    public Kereta(String no_kursi, String status_kursi) {
        this.no_kursi = no_kursi;
        this.status_kursi = status_kursi;
    }
 

    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }

    public String getNama() { return nama; }
    public void setNama(String nama) { this.nama = nama; }

    public String getKelas() { return kelas; }
    public void setKelas(String kelas) { this.kelas = kelas; }

    public int getId_kereta() { return id_kereta; }
    public void setId_kereta(int id_kereta) { this.id_kereta = id_kereta; }

    public int getId_jadwal() { return id_jadwal; }
    public void setId_jadwal(int id_jadwal) { this.id_jadwal = id_jadwal; }

    public int getId_kursi() { return id_kursi; }
    public void setId_kursi(int id_kursi) { this.id_kursi = id_kursi; }

    public String getTgl_pergi() { return tgl_pergi; }
    public void setTgl_pergi(String tgl_pergi) { this.tgl_pergi = tgl_pergi; }

    public String getJam_pergi() { return jam_pergi; }
    public void setJam_pergi(String jam_pergi) { this.jam_pergi = jam_pergi; }

    public String getJam_sampai() { return jam_sampai; }
    public void setJam_sampai(String jam_sampai) { this.jam_sampai = jam_sampai; }

    public String getLama_perjalanan() { return lama_perjalanan; }
    public void setLama_perjalanan(String lama_perjalanan) { this.lama_perjalanan = lama_perjalanan; }

    public String getAsal() { return asal; }
    public void setAsal(String asal) { this.asal = asal; }

    public String getTujuan() { return tujuan; }
    public void setTujuan(String tujuan) { this.tujuan = tujuan; }

    public String getHarga() { return harga; }
    public void setHarga(String harga) { this.harga = harga; }

    public String getNo_kursi() { return no_kursi; }
    public void setNo_kursi(String no_kursi) { this.no_kursi = no_kursi; }

    public String getStatus_kursi() { return status_kursi; }
    public void setStatus_kursi(String status_kursi) { this.status_kursi = status_kursi; }
}