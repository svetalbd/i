//
// This file was generated by the JavaTM Architecture for XML Binding(JAXB) Reference Implementation, v2.2.4-2 
// See <a href="http://java.sun.com/xml/jaxb">http://java.sun.com/xml/jaxb</a> 
// Any modifications to this file will be lost upon recompilation of the source schema. 
// Generated on: 2016.03.27 at 04:30:25 PM EEST 
//


package org.igov.util.swind.jaxb;

import javax.xml.bind.annotation.XmlEnum;
import javax.xml.bind.annotation.XmlEnumValue;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for DGSignGKS.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * <p>
 * <pre>
 * &lt;simpleType name="DGSignGKS">
 *   &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *     &lt;enumeration value="Директор"/>
 *     &lt;enumeration value="Бухгалтер"/>
 *     &lt;enumeration value="Печатка установи"/>
 *   &lt;/restriction>
 * &lt;/simpleType>
 * </pre>
 * 
 */
@XmlType(name = "DGSignGKS")
@XmlEnum
public enum DGSignGKS {

    @XmlEnumValue("\u0414\u0438\u0440\u0435\u043a\u0442\u043e\u0440")
    ДИРЕКТОР("\u0414\u0438\u0440\u0435\u043a\u0442\u043e\u0440"),
    @XmlEnumValue("\u0411\u0443\u0445\u0433\u0430\u043b\u0442\u0435\u0440")
    БУХГАЛТЕР("\u0411\u0443\u0445\u0433\u0430\u043b\u0442\u0435\u0440"),
    @XmlEnumValue("\u041f\u0435\u0447\u0430\u0442\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438")
    ПЕЧАТКА_УСТАНОВИ("\u041f\u0435\u0447\u0430\u0442\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438");
    private final String value;

    DGSignGKS(String v) {
        value = v;
    }

    public String value() {
        return value;
    }

    public static DGSignGKS fromValue(String v) {
        for (DGSignGKS c: DGSignGKS.values()) {
            if (c.value.equals(v)) {
                return c;
            }
        }
        throw new IllegalArgumentException(v);
    }

}
