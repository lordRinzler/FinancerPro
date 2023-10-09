import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { COLORS, SIZES, CONSTANTS, FONTS } from '../../constants/Theme';

const CalendarView = ({onDateSelect}) => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
  const firstDayOfWeek = new Date(selectedYear, selectedMonth, 1).getDay();

  const handleYearChange = (year) => {
    if (year < 1980) {
      setSelectedYear(1980);
    } else if (year > 3000) {
      setSelectedYear(3000);
    } else {
      setSelectedYear(year);
    }

    const newDate = new Date(selectedDate);
    setSelectedDate(newDate);
  };

  const handleMonthChange = (month) => {
    if (month < 0) {
      setSelectedMonth(11);
      setSelectedYear(selectedYear - 1);
    } else if (month > 11) {
      setSelectedMonth(0);
      setSelectedYear(selectedYear + 1);
    } else {
      setSelectedMonth(month);
    }
  };

  const resetCalendar = () => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    setSelectedYear(currentYear);
    setSelectedMonth(currentMonth);
  };

  const handleDaySelect = (day) => {
    const newDate = new Date(selectedDate);
    newDate.setFullYear(selectedYear);
    newDate.setMonth(selectedMonth);
    newDate.setDate(day);
    setSelectedDate(newDate);
    onDateSelect(newDate.toDateString());
  };

  const getWeeksArray = () => {
    const weeksArray = [];
    let week = Array(7).fill('');
    let dayCounter = 1;
    for (let i = 0; i < firstDayOfWeek; i++) {
      week[i] = ' ';
    }
    for (let i = firstDayOfWeek; i < 7; i++) {
      week[i] = dayCounter++;
    }
    while (dayCounter <= daysInMonth) {
      weeksArray.push(week);
      week = Array(7).fill('');
      for (let i = 0; i < 7; i++) {
        if (dayCounter <= daysInMonth) {
          week[i] = dayCounter++;
        }
      }
    }
    while (week.length < 7) {
      week.push(' ');
    }
    weeksArray.push(week);
    return weeksArray;
  };

  const getDayLabel = (day) => {
    return day ? day.toString() : '';
  };

   const isSameDate = (date1, date2) => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.spinner}
          onPress={() => handleYearChange(selectedYear - 1)}>
          <Text style={styles.spinnerText}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>{selectedYear}</Text>
        <TouchableOpacity
          style={styles.spinner}
          onPress={() => handleYearChange(selectedYear + 1)}>
          <Text style={styles.spinnerText}>{'>'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.spinner}
          onPress={() => handleMonthChange(selectedMonth - 1)}>
          <Text style={styles.spinnerText}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>{MONTH_NAMES[selectedMonth]}</Text>
        <TouchableOpacity
          style={styles.spinner}
          onPress={() => handleMonthChange(selectedMonth + 1)}>
          <Text style={styles.spinnerText}>{'>'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.resetButton} onPress={resetCalendar}>
          <Ionicons
            name="refresh-outline"
            size={SIZES.large}
            color={COLORS.appPrimary}
          />
        </TouchableOpacity>
      </View>
      <View>
        <View style={styles.calendar}>
          <View style={styles.dayLabels}>
            {DAY_LABELS.map((day) => (
              <View
                key={day}
                style={[
                  styles.dayLabel,
                  day === 'Sat' || day === 'Sun' ? styles.weekend : null,
                ]}>
                <Text
                  style={[
                    styles.dayLabelText,
                    day === 'Sat' || day === 'Sun' ? styles.weekendText : null,
                  ]}>
                  {day}
                </Text>
              </View>
            ))}
          </View>
          {getWeeksArray().map((week, weekIndex) => (
            <View key={weekIndex} style={styles.week}>
              {week.map((day, dayIndex) => (
                <TouchableOpacity
                  key={dayIndex}
                  style={[
                    styles.day,
                    day != '' &&
                    ((firstDayOfWeek + day - 1) % 7 === 0 ||
                      (firstDayOfWeek + day - 1) % 7 === 6)
                      ? styles.weekend
                      : null,
                    isSameDate(selectedDate, new Date(selectedYear, selectedMonth, day))
                  ? styles.selectedDate
                  : null,
                  ]}
                  onPress={() => handleDaySelect(day)}>
                  <Text
                    style={[
                      styles.dayText,
                      (firstDayOfWeek + day - 1) % 7 === 0 ||
                      (firstDayOfWeek + day - 1) % 7 === 6
                        ? styles.weekendText
                        : null,
                         isSameDate(selectedDate, new Date(selectedYear, selectedMonth, day))
                        ? styles.selectedDateText
                        : null,
                    ]}>
                    {getDayLabel(day)}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const DAY_LABELS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: COLORS.white,
    padding: CONSTANTS.spacingMedium,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: CONSTANTS.spacingMedium,
  },
  spinner: {
    padding: CONSTANTS.spacingSmall,
  },
  spinnerText: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.medium,
    color: COLORS.appPrimary,
  },
  headerText: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.medium,
    color: COLORS.appPrimary,
    marginHorizontal: CONSTANTS.spacingMedium,
  },
  calendar: {
    borderWidth: 1,
    borderColor: COLORS.borderColor,
    borderRadius: CONSTANTS.borderRadiusSmall,
  },
   selectedDate: {
    backgroundColor: COLORS.appPrimary,
  },
  selectedDateText: {
    color: COLORS.white,
  },
  dayLabels: {
    flexDirection: 'row',
  },
  dayLabel: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: CONSTANTS.spacingSmall,
    borderBottomWidth: 1,
    borderColor: COLORS.borderColor,
  },
  dayLabelText: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.small,
    color: COLORS.appSecondary,
  },
  weekend: {
    backgroundColor: COLORS.cardScnd,
  },
  weekendText: {
    color: COLORS.appPrimary,
    fontFamily: FONTS.bold,
  },
  week: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  day: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: CONSTANTS.spacingMedium,
    borderColor: COLORS.borderColor,
    borderBottomWidth: 1,
  },
  dayText: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.small,
    color: COLORS.appPrimary,
  },
});

export default CalendarView;
