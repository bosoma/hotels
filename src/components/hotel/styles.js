import colors from 'root/src/constants/colors';

const styles = {
  container: {
    padding: 15,
    borderTopWidth: 1,
    borderColor: '#F8F8F8',
    margin: 1,
    borderRadius: 5,
  },
  overview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
  },
  image: {
    flex: 1,
    width: 50,
    height: 60,
    borderRadius: 15,
  },
  internalRow: {
    padding: 15,
    flex: 5,
    flexDirection: 'row',
  },
  hotelStars: {
    color: colors.blueGrotto,
    paddingLeft: 2
  },
  title: {
    fontWeight: '600',
    fontSize: 15,
  },
  details: {
    padding: 15,
  }
};

export default styles;
