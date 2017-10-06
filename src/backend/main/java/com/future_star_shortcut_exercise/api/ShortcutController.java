package com.future_star_shortcut_exercise.api;

import com.future_star_shortcut_exercise.dto.ResponseShortcut;
import com.future_star_shortcut_exercise.entity.Shortcut;
import com.future_star_shortcut_exercise.service.ShortcutService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/shortcut")
public class ShortcutController {

    @Autowired
    private ShortcutService shortcutService;

    @GetMapping
    public ResponseShortcut getRandomOne() {
        return shortcutService.getRandomOne();
    }

    @GetMapping("/{shortcutId}")
    public Shortcut getOne(@PathVariable String shortcutId) {
        return shortcutService.getOne(shortcutId);
    }
}
