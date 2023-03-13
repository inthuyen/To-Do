package com.github.cps730group.todobackend.config;

import com.github.cps730group.todobackend.entities.Todo;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.MediaType;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

@Configuration
public class SpringRestConfig implements RepositoryRestConfigurer {

    @Value("${app.frontend.origin}")
    private String frontendOrigin;

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
        // Default response type from our API is JSON
        config.setDefaultMediaType(MediaType.APPLICATION_JSON);
        // Configure the format of our JSON response data
        config.useHalAsDefaultJsonMediaType(false);
        // Show the IDs for the todos in the JSON
        config.exposeIdsFor(Todo.class);
        // Configure CORS security settings to allow our frontend to send requests
        cors.addMapping("/**").allowedOrigins(frontendOrigin).allowedMethods("*");
    }

}
