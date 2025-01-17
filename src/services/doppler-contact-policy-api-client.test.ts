import { AxiosStatic } from 'axios';
import { RefObject } from 'react';
import { AppSession } from './app-session';
import { DopplerLegacyUserData } from './doppler-legacy-client';
import { HttpDopplerContactPolicyApiClient } from './doppler-contact-policy-api-client';
import { subscriberListCollection } from './doppler-api-client.double';

const emailAccount = 'email@mail.com';
const accountSettings = {
  accountName: emailAccount,
  active: true,
  emailsAmountByInterval: 20,
  intervalInDays: 7,
  excludedSubscribersLists: subscriberListCollection(2),
};

function createHttpDopplerContactPolicyApiClient(axios: any) {
  const axiosStatic = {
    create: () => axios,
  } as AxiosStatic;

  const connectionDataRef = {
    current: {
      status: 'authenticated',
      jwtToken: 'jwtToken',
      userData: { user: { email: emailAccount } } as DopplerLegacyUserData,
    },
  } as RefObject<AppSession>;

  return new HttpDopplerContactPolicyApiClient({
    axiosStatic,
    baseUrl: 'http://api.test',
    connectionDataRef,
  });
}

describe('Doppler Contact Policy Api Client', () => {
  it('should get account settings correctly', async () => {
    // Arrange
    const response = {
      data: accountSettings,
      status: 200,
    };
    const request = jest.fn(async () => response);
    const dopplerContactPolicyApiClient = createHttpDopplerContactPolicyApiClient({ request });

    // Act
    const result = await dopplerContactPolicyApiClient.getAccountSettings();

    // Assert
    expect(request).toBeCalledTimes(1);
    expect(result).not.toBe(undefined);
    expect(result.success).toBe(true);
    expect(result.value.active).toBe(true);
    expect(result.value.emailsAmountByInterval).toBe(20);
    expect(result.value.intervalInDays).toBe(7);
    expect(result.value.excludedSubscribersLists).not.toBe(undefined);
    expect(result.value.excludedSubscribersLists).toHaveLength(2);
  });

  it('should get an error when requesting account settings', async () => {
    // Arrange
    const response = {
      data: {},
      status: 400,
    };
    const request = jest.fn(async () => response);
    const dopplerContactPolicyApiClient = createHttpDopplerContactPolicyApiClient({ request });

    // Act
    const result = await dopplerContactPolicyApiClient.getAccountSettings();

    // Assert
    expect(request).toBeCalledTimes(1);
    expect(result).not.toBe(undefined);
    expect(result.success).toBe(false);
  });

  it('should update account settings correctly', async () => {
    // Arrange
    const response = {
      status: 200,
    };
    const request = jest.fn(async () => response);
    const dopplerContactPolicyApiClient = createHttpDopplerContactPolicyApiClient({ request });

    // Act
    const result = await dopplerContactPolicyApiClient.updateAccountSettings(accountSettings);

    // Assert
    expect(request).toBeCalledTimes(1);
    expect(result).not.toBe(undefined);
    expect(result.success).toBe(true);
  });

  it('should get an error when updating account settings', async () => {
    // Arrange
    const response = {
      status: 500,
    };
    const request = jest.fn(async () => response);
    const dopplerContactPolicyApiClient = createHttpDopplerContactPolicyApiClient({ request });

    // Act
    const result = await dopplerContactPolicyApiClient.updateAccountSettings(accountSettings);

    // Assert
    expect(request).toBeCalledTimes(1);
    expect(result).not.toBe(undefined);
    expect(result.success).toBe(false);
  });
});
