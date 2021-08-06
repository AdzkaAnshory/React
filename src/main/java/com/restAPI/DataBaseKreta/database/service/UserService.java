package com.restAPI.DataBaseKreta.database.service;

import com.google.gson.Gson;
import com.restAPI.DataBaseKreta.database.model.Kereta;
import com.restAPI.DataBaseKreta.database.model.User;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.io.Reader;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeoutException;

@Service
public class UserService {
    static SqlSession session;

    public static void connectMyBatis() throws IOException {
        Reader reader = Resources.getResourceAsReader("SqlMapConfig.xml");
        SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(reader);
        session = sqlSessionFactory.openSession();
    }

    public static boolean insertUser(String userString)  throws IOException, TimeoutException {
        System.out.println("Memulai insert user..");
        User user = new Gson().fromJson(userString, User.class);
        user.setStatus("logout");
        connectMyBatis();
        int hasil = session.insert("User.insertUser", user);
        session.commit();                                           //Eksekusi Query

        if(hasil == 1){
            System.out.println("Insert user berhasil");
            return true;
        } else {
            System.out.println("Insert user gagal...");
            return false;
        }
    }

    public static List<User> selectAll() throws IOException {
        connectMyBatis();
        List<User> users = session.selectList("User.getAll");
        List<User> list = new ArrayList<User>();
        for(User st : users ){
            list.add(new User(st.getId(),st.getNama(),st.getUsername(),st.getPassword(),st.getJabatan(),st.getStatus()));
        }
        System.out.println("Records Read Successfully ");
        session.commit();
        return list;
    }

    public static void deleteUser(String idString) throws IOException, TimeoutException {
        System.out.println("Memulai delete user...");
        connectMyBatis();                                           //Membuat koneksi db MyBatis
        long id = Long.parseLong(idString);                         //Konversi String ke Long

        int hasil = session.delete("User.deleteUserById",id);  //Proses menghapus record siswa
        session.commit();                                           //Ekseskusi query

        if(hasil==1){
            System.out.println("Delete user berhasil");
        } else {
            System.out.println("Delete user gagal...");
        }
    }

    public static String loginUser(String userString) throws IOException, TimeoutException {
        connectMyBatis();
        User user = new Gson().fromJson(userString, User.class);
        String email1 = (String) session.selectOne("User.getEmail", user.getPassword());
        String password1 = (String) session.selectOne("User.getPassword", user.getUsername());
        String status = (String) session.selectOne("User.getStatus",user.getUsername());
        user.setStatus("login");
        if(user.getUsername().equals(email1)&&(user.getPassword().equals(password1))) {
            if (!status.equals("login")) {
                session.insert("User.updateStatus", user);
                session.commit();
                System.out.println("login "+ email1 +" berhasil");
                String log = "berhasil";
                return  log;
            }else{
                System.out.println("Anda sudah login");
                String log = "sudah";
                return log;
            }
        }
        String log = "gagal";
        return log;
    }

    public static void updateUser(String userString) throws IOException , TimeoutException {
        connectMyBatis();
        User user = new Gson().fromJson(userString, User.class);
        System.out.println(user.getId());
        System.out.println(user.getNama());
        System.out.println(user.getUsername());
        System.out.println(user.getPassword());
        System.out.println(user.getJabatan());

        int hasil = session.update("User.updateUser", user);
        session.commit();

        if(hasil==1){
            System.out.println("Edit berhasil");
        } else {
            System.out.println("Edit gagal....");
        }
    }

    public static String logoutUser(String userString) throws IOException, TimeoutException {
        connectMyBatis();
        User user = new Gson().fromJson(userString, User.class);
        user.setStatus("logout");
        int hasil = session.insert("User.updateStatus", user);
        session.commit();
        if(hasil == 1){
            System.out.println("Insert user berhasil");
            String log = "berhasil";
            return log;
        } else {
            System.out.println("Insert user gagal...");
            String log = "gagal";
            return log;
        }
    }
}
