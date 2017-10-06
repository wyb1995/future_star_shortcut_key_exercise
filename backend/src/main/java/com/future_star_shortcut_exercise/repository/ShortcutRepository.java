package com.future_star_shortcut_exercise.repository;

import com.future_star_shortcut_exercise.entity.Shortcut;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ShortcutRepository extends JpaRepository<Shortcut, String>{
    @Query(value="SELECT * FROM t_shortcut ORDER BY RAND() LIMIT 1", nativeQuery = true)
    Shortcut findRandomOne();
}
