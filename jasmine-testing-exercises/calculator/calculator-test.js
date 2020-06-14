describe('calculate monthly rate', function () {
  beforeEach(function () {
    const defaultValues = {
      amount: 5000,
      year: 4,
      rate: 2.9,
    };
  });

  it('should calculate the monthly rate correctly', function () {
    const values = {
      amount: 5000,
      years: 4,
      rate: 2.9,
    };
    expect(calculateMonthlyPayment(values)).toEqual('110.45');
  });

  it('should return a result with 2 decimal places', function () {
    const values = {
      amount: 5010,
      years: 4,
      rate: 2.9,
    };
    expect(calculateMonthlyPayment(values)).toEqual('110.67');
  });
});
