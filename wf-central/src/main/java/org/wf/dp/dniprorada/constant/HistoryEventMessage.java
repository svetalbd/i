package org.wf.dp.dniprorada.constant;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Map;

public class HistoryEventMessage {
    private static final Logger log = LoggerFactory.getLogger(HistoryEventMessage.class);

    public static final String SERVICE_NAME = "%Назва послуги%";
    public static final String SERVICE_STATE = "%статус%";
    public static final String TASK_NUMBER = "%nTask%";
    public static final String FIO = "%Ім’я того, кому надають доступ%";
    public static final String TELEPHONE = "%телефон%";
    public static final String DOCUMENT_TYPE = "%Тип документу%";
    public static final String DOCUMENT_NAME = "%Назва документу%";
    public static final String ORGANIZATION_NAME = "%Назва органу%";

    public static String createJournalMessage(Long nID_HistoryEventType, Map<String, String> values) {
        String eventMessage = "";
        try {
            HistoryEventType eventType = HistoryEventType.getById(nID_HistoryEventType);
            String eventTemplate = eventType.getsTemplate();
            for (String key : values.keySet()) {
                eventMessage = eventTemplate.replaceAll(key, values.get(key));
            }
            ;
        } catch (Exception e) {
            log.warn(e.getMessage());//???
        }
        return eventMessage;
    }
}
