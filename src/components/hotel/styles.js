import colors from 'root/src/constants/colors';

const styles = {
  container: {
    borderTopWidth: 1,
    borderColor: '#F8F8F8',
    margin: 1,
    borderRadius: 5,
    flexGrow: 1,
  },
  overview: {
    flexGrow: 1,
    paddingHorizontal: 11,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    height: 45,
    borderRadius: 15,
  },
  internalRow: {
    minHeight: 55,
    padding: 10,
    flex: 6,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  hotelStars: {
    color: colors.blueGrotto,
    paddingLeft: 2,
  },
  title: {
    maxWidth: 260,
    fontWeight: '600',
    fontSize: 15,
  },
};

export default styles;
