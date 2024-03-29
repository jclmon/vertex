package com.web.chat.beans;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import javax.enterprise.context.ApplicationScoped;
import javax.enterprise.context.SessionScoped;
import javax.inject.Named;

import lombok.Getter;
import lombok.Setter;

/**
 *
 * @author armenar
 */
@Named
@ApplicationScoped
public class MessageBean implements Serializable {

    private static final long serialVersionUID = 1L;
    @Setter
    @Getter
    private List<String> logList = new ArrayList<>();
   
}
