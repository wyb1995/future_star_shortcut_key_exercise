package com.future_star_shortcut_exercise.service.Impl;

import com.future_star_shortcut_exercise.dto.ResponseShortcut;
import com.future_star_shortcut_exercise.entity.Shortcut;
import com.future_star_shortcut_exercise.entity.User;
import com.future_star_shortcut_exercise.repository.ShortcutRepository;
import com.future_star_shortcut_exercise.repository.UserRepository;
import com.future_star_shortcut_exercise.service.ShortcutService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ShortcutServiceImpl implements ShortcutService {

    @Autowired
    private ShortcutRepository shortcutRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public ResponseShortcut getRandomOne() {
        Shortcut randomShortcut = shortcutRepository.findRandomOne();
        User randomUser = userRepository.findRandomOne();
        return ResponseShortcut.builder()
                .shortcutDescribe(randomShortcut.getShortcut_describe())
                .shortcutId(randomShortcut.getId())
                .userId(randomUser.getId())
                .userName(randomUser.getName())
                .build();
    }

    @Override
    public Shortcut getOne(String shortcutId) {
        return shortcutRepository.findOne(shortcutId);
    }
}
