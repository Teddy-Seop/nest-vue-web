import Vue from 'vue';
import dayjs from "dayjs";

Vue.filter("dateTime", (format: string) => {
    return dayjs(format).format("YYYY-MM-DD HH:MM");
})