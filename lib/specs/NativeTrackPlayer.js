import { TurboModuleRegistry } from 'react-native';
const module = TurboModuleRegistry.getEnforcing('TrackPlayer');
export const Constants = module?.getConstants();
export default module;
