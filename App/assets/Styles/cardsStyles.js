import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const commonStyles = StyleSheet.create({
  card: {
    borderRadius: 8,
    width: screenWidth * 0.25, // Adjust width as needed
    height: 60, // Adjust height as needed
    marginHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gainsboro',
  },
  selectedCard: {
    // No border for selected card, gradient applied
  },
  defaultCard: {
    borderWidth: 2,
    borderColor: 'gainsboro',
  },
  gradient: {
    borderRadius: 8,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  cardContent: {
    flexDirection: 'row',  // Align items horizontally
    alignItems: 'center',  // Center items vertically
    justifyContent: 'center', // Center items horizontally
    position: 'absolute',
    zIndex: 1,
  },
  icon: {
    width: 25,  // Set the size of the icon
    height: 25, // Set the size of the icon
    marginRight: 8, // Space between icon and text
  },
  cardTitle: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  defaultText: {
    color: 'black',
  },
});

export default commonStyles;
