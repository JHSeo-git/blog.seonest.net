import { FireIcon, ImportantIcon, InfoIcon, LightBulbIcon, WarningFillIcon } from '../_icons';
import type { AdmonitionType } from './Admonition';

interface AdmonitionIconProps {
  admonitionType: AdmonitionType;
}

function AdmonitionIcon({ admonitionType }: AdmonitionIconProps) {
  return (
    <>
      {admonitionType === 'note' && <InfoIcon />}
      {admonitionType === 'caution' && <WarningFillIcon />}
      {admonitionType === 'danger' && <FireIcon />}
      {admonitionType === 'info' && <ImportantIcon />}
      {admonitionType === 'tip' && <LightBulbIcon />}
    </>
  );
}

export default AdmonitionIcon;
