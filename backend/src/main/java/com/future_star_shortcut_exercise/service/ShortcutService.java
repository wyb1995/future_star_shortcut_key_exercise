package com.future_star_shortcut_exercise.service;

import com.future_star_shortcut_exercise.dto.ResponseShortcut;
import com.future_star_shortcut_exercise.entity.Shortcut;

public interface ShortcutService {
    ResponseShortcut getRandomOne();

    Shortcut getOne(String shortcutId);
}
