import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import {
  VictoryChart,
  VictoryBar,
  VictoryGroup,
  VictoryLegend,
  VictoryAxis,
} from 'victory-native';

import { COLORS, SIZES, FONTS, SHADOW, CONSTANTS } from '../../constants/Theme';

const data = [
  {
    month: 'Jan',
    spending: 7656,
    earning: 3647,
  },
  {
    month: 'Feb',
    spending: 3214,
    earning: 3023,
  },
  {
    month: 'Mar',
    spending: 3624,
    earning: 3256,
  },
  {
    month: 'Apr',
    spending: 3264,
    earning: 9725,
  },
  {
    month: 'May',
    spending: 2634,
    earning: 3236,
  },
  {
    month: 'Jun',
    spending: 3262,
    earning: 4650,
  },
];

const formatYAxisLabel = (value) => {
  if (value >= 1000) {
    return `${(value / 1000).toFixed(1)}k`;
  }
  return value;
};

const GroupedBarChart = () => {

  const screenWidth = Dimensions.get('window').width;
  const barWidth = 15;
  return (
    <View style={styles.chartArea}>
      <VictoryChart  width={screenWidth - 10} height={250}>
        <VictoryLegend
          x={screenWidth/4 - 40}
          y={10}
          data={[
            { name: 'Spending', symbol: { fill: COLORS.tertiaryColor } },
            { name: 'Earning', symbol: { fill: COLORS.cardScnd } },
          ]}
          orientation="horizontal"
          gutter={20}
          style={{
            title: { fontSize: 20, fontFamily: FONTS.regular },
            labels: { fontFamily: FONTS.medium }, 
          }}
        />
        <VictoryAxis
        tickValues={data.map((item) => item.month)}
        style={{
            axisLabel: { fontFamily: FONTS.medium },
            tickLabels: { fontFamily: FONTS.medium },
          }}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={(tick) => formatYAxisLabel(tick)}
          style={{
            axisLabel: { fontFamily: FONTS.medium },
            tickLabels: { padding: 5, fontFamily: FONTS.medium },
          }}
        />
        <VictoryGroup offset={barWidth}>
          <VictoryBar
            data={data}
            x="month"
            y="spending"
            barWidth={barWidth}
            style={{
              data: {
                fill: COLORS.tertiaryColor,
              },
            }}
          />
          <VictoryBar
            data={data}
            x="month"
            y="earning"
            barWidth={barWidth}
            style={{
              data: {
                fill: COLORS.cardScnd,
              },
            }}
          />
        </VictoryGroup>
      </VictoryChart>
    </View>
  );
};

const styles = StyleSheet.create({
  chartArea: {
    padding: CONSTANTS.spacingSmall,
    paddingLeft: CONSTANTS.spacingLarge,
    borderRadius: CONSTANTS.borderRadiusGen,
    margin: CONSTANTS.spacingMedium,
    justifyContent: 'center',
    alignContent: 'center',
    display: 'flex',
  },
});

export default GroupedBarChart;
