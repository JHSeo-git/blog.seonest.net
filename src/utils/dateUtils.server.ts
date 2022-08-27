import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import ko from 'date-fns/locale/ko';

export const getDistanceToNow = (date: Date | string) => {
  let d: Date;
  if (typeof date === 'string') {
    d = new Date(date);
  } else {
    d = date;
  }
  const now = Date.now();
  const diff = now - d.getTime();

  // 1분 이내
  if (diff < 1000 * 60) {
    return '방금 전';
  }

  // 1달 이내
  if (diff < 1000 * 60 * 60 * 24 * 30) {
    return formatDistanceToNow(d, {
      locale: ko,
      addSuffix: true,
    });
  }

  return d.toLocaleDateString();
};
