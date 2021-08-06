package com.restAPI.DataBaseKreta.database.service;

import com.google.gson.Gson;
import com.restAPI.DataBaseKreta.database.model.Kereta;
import com.restAPI.DataBaseKreta.database.rabbitmq.Send;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.io.Reader;
import java.util.ArrayList;
import java.util.List;

@Service
public class MyBatisService {

    static SqlSession session;

    public static void connectMyBatis() throws IOException {
        Reader reader = Resources.getResourceAsReader("SqlMapConfig.xml");
        SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(reader);
        session = sqlSessionFactory.openSession();
    }

    public static List<Kereta> selectAll() throws IOException {
        connectMyBatis();
        List<Kereta> kereta = session.selectList("Kereta.selectAll");
        List<Kereta> list = new ArrayList<Kereta>();
        for(Kereta st : kereta ){
            list.add(new Kereta(st.getId(),st.getNama(),st.getKelas(),st.getTgl_pergi(),st.getJam_pergi(),st.getJam_sampai(),st.getLama_perjalanan(),st.getAsal(), st.getTujuan(), st.getHarga(), st.getNo_kursi(), st.getStatus_kursi()));
        }
        System.out.println("Records Read Successfully ");
        session.commit();
        return list;
    }

    public static List<Kereta> selectAsal(String asal, String tujuan, String status_kursi) throws IOException {
        connectMyBatis();
        Kereta where = new Kereta();
        where.setAsal(asal);
        where.setTujuan(tujuan);
        where.setStatus_kursi(status_kursi);
        List<Kereta> kereta = session.selectList("Kereta.selectAsal", where);
        List<Kereta> list = new ArrayList<Kereta>();
        for(Kereta st : kereta ){
            list.add(new Kereta(st.getId(),st.getNama(),st.getKelas(),st.getTgl_pergi(),st.getJam_pergi(),st.getJam_sampai(),st.getLama_perjalanan(),st.getAsal(), st.getTujuan(), st.getHarga(), st.getNo_kursi(), st.getStatus_kursi()));
        }
        System.out.println("Records Read Successfully ");
        session.commit();
        return list;
    }

    public static void getJadwal(String msg) throws IOException {
        Kereta kereta = new Gson().fromJson(msg, Kereta.class);
        connectMyBatis();
        List<Kereta> keretas = session.selectList("Kereta.selectAsal", kereta);
        List<Kereta> list = new ArrayList<Kereta>();
        for(Kereta st : keretas ){
            list.add(new Kereta(st.getId(),st.getNama(),st.getKelas(),st.getTgl_pergi(),st.getJam_pergi(),st.getJam_sampai(),st.getLama_perjalanan(),st.getAsal(), st.getTujuan(), st.getHarga(), st.getNo_kursi(), st.getStatus_kursi()));
        }
        System.out.println("Records Read Successfully ");
        session.commit();
        String sendmsg = new Gson().toJson(list);
        if(!list.isEmpty()) {
            Send.sendJadwal(sendmsg);
        }else{
            Send.sendJadwal("Gagal");
        }
    }

//    public static List<Kereta> selectKursi(String status_kursi) throws IOException {
//        connectMyBatis();
//        List<Kereta> kereta = session.selectList("Kereta.selectAsal", status_kursi);
//        List<Kereta> list = new ArrayList<Kereta>();
//        for(Kereta st : kereta ){
//            list.add(new Kereta(st.getNo_kursi(), st.getStatus_kursi()));
//        }
//        System.out.println("Records Read Successfully ");
//        session.commit();
//        return list;
//    }


    public boolean saveKereta(String stringKereta) throws IOException {
        System.out.println("Memulai insert kereta..");
        Kereta kereta = new Gson().fromJson(stringKereta, Kereta.class);
        connectMyBatis();
        int hasil = session.insert("Kereta.insertKereta", kereta);
        session.commit();                                           //Eksekusi Query

        if(hasil == 1){
            System.out.println("Insert berhasil");
            return true;
        } else {
            System.out.println("Insert gagal...");
            return false;
        }
    }

    public boolean saveJadwal(String stringJadwal) throws IOException {
        System.out.println("Memulai insert jadwal..");
        Kereta kereta = new Gson().fromJson(stringJadwal, Kereta.class);
        connectMyBatis();
        int hasil = session.insert("Kereta.insertJadwal", kereta);
        session.commit();                                           //Eksekusi Query

        if(hasil == 1){
            System.out.println("Insert berhasil");
            return true;
        } else {
            System.out.println("Insert gagal...");
            return false;
        }
    }

    public boolean saveKursi(String stringKursi) throws IOException {
        System.out.println("Memulai insert kursi..");
        Kereta kereta = new Gson().fromJson(stringKursi, Kereta.class);
        connectMyBatis();
        int hasil = session.insert("Kereta.insertKursi", kereta);
        session.commit();                                           //Eksekusi Query

        if(hasil == 1){
            System.out.println("Insert berhasil");
            return true;
        } else {
            System.out.println("Insert gagal...");
            return false;
        }
    }

    public boolean updateKeretaById(String stringKereta) throws IOException {
        System.out.println("Memulai Update Kereta..");
        Kereta kereta = new Gson().fromJson(stringKereta, Kereta.class);
        connectMyBatis();
        int hasil = session.insert("Kereta.updateKereta", kereta);
        session.commit();                                           //Eksekusi Query

        if(hasil == 1){
            System.out.println("Update berhasil");
            return true;
        } else {
            System.out.println("Update gagal...");
            return false;
        }
    }

    public boolean updateJadwalById(String stringJadwal) throws IOException {
        System.out.println("Memulai update jadwal..");
        Kereta kereta = new Gson().fromJson(stringJadwal, Kereta.class);
        connectMyBatis();
        int hasil = session.insert("Kereta.updateJadwal", kereta);
        session.commit();                                           //Eksekusi Query

        if(hasil == 1){
            System.out.println("Update berhasil");
            return true;
        } else {
            System.out.println("Update gagal...");
            return false;
        }
    }

    public boolean updateKursiById(String stringKursi) throws IOException {
        System.out.println("Memulai update kursi..");
        Kereta kereta = new Gson().fromJson(stringKursi, Kereta.class);
        connectMyBatis();
        int hasil = session.insert("Kereta.updateKursi", kereta);
        session.commit();                                           //Eksekusi Query

        if(hasil == 1){
            System.out.println("Update berhasil");
            return true;
        } else {
            System.out.println("Update gagal...");
            return false;
        }
    }

    public boolean updateStatusKursi(String stringKursi) throws IOException {
        System.out.println("Memulai update kursi..");
        Kereta kereta = new Gson().fromJson(stringKursi, Kereta.class);
        connectMyBatis();
        int hasil = session.insert("Kereta.updateKursi", kereta);
        session.commit();                                           //Eksekusi Query

        if(hasil == 1){
            System.out.println("Update berhasil");
            return true;
        } else {
            System.out.println("Update gagal...");
            return false;
        }
    }


//    public void deleteSiswa(String idString) throws IOException, TimeoutException {
//        System.out.println("Memulai delete siswa...");
//        connectMyBatis();                                           //Membuat koneksi db MyBatis
//        long id = Long.parseLong(idString);                         //Konversi String ke Long
//
//        session.delete("Siswa.deleteNilaiById",id);              //Proses menghapus record nilai
//        int hasil = session.delete("Siswa.deleteSiswaById",id);  //Proses menghapus record siswa
//        session.commit();                                           //Ekseskusi query
//
//        if(hasil==1){
//            System.out.println("Delete siswa berhasil");
//        } else {
//            System.out.println("Delete siswa gagal...");
//        }
//    }


}
