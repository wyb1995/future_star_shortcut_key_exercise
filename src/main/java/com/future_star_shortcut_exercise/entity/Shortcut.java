package com.future_star_shortcut_exercise.entity;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Getter
@Setter
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "t_shortcut")
public class Shortcut {
    @Id
    private String id;

    private String shortcut_describe;
    private String shortcut_key;
}
