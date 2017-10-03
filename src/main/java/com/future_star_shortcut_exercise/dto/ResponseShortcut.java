package com.future_star_shortcut_exercise.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Service;

@Getter
@Service
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ResponseShortcut {
    private String userId;
    private String userName;
    private String shortcutId;
    private String shortcutDescribe;
}
