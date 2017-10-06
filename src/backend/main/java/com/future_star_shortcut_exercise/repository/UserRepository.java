package com.future_star_shortcut_exercise.repository;

import com.future_star_shortcut_exercise.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, String>{
    @Query(value="SELECT * FROM t_user ORDER BY RAND() LIMIT 1", nativeQuery = true)
    User findRandomOne();
}
