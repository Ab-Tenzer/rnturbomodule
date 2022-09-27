/*
 * Reducer actions related with navigation
 */
import NavigationService from '../../navigation/NavigationService';

export function navigateToHome(params: any) {
  NavigationService.navigate('Welcome', params);
}

export function navigateToForgotPassword(params?: any) {
  NavigationService.navigate('DeviceCheck', params);
}
