import colors from 'root/src/constants/colors';

const styles = {
  container: {
    borderTopWidth: 1,
    borderColor: '#F8F8F8',
    margin: 1,
    borderRadius: 5,
  },
  overview: {
    padding: 11,
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: colors.babyBlue,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    flex: 1,
    width: 50,
    height: 50,
    borderRadius: 15,
  },
  internalRow: {
    minHeight: 55,
    padding: 10,
    flex: 5,
    flexDirection: 'row',
  },
  hotelStars: {
    color: colors.blueGrotto,
    paddingLeft: 2,
  },
  title: {
    fontWeight: '600',
    fontSize: 15,
  },
};

export default styles;
