  SELECT a.name, date_part('year', a.created_at) || '-' || date_part('month', a.created_at), count(clicks.id)
    FROM clicks
    JOIN campaigns c ON clicks.campaign_id = c.id
    JOIN accounts a ON c.account_id = a.id
GROUP BY a.name, date_part('year', a.created_at) || '-' || date_part('month', a.created_at);

 SELECT a.id, a.name, date_part('year', a.created_at) || '-' || date_part('month', a.created_at), count(c2.id)
   FROM campaigns c
   JOIN accounts a ON c.account_id = a.id
   LEFT JOIN clicks c2 ON c.id = c2.campaign_id
  WHERE a.active = true and (c.created_at > CURRENT_DATE - INTERVAL '6 months')
  GROUP BY a.id, a.name, date_part('year', a.created_at) || '-' || date_part('month', a.created_at);

SELECT a.id, a.name, date_part('year', a.created_at) || '-' || date_part('month', a.created_at), count(clicks.id)
  FROM clicks
  JOIN campaigns c ON clicks.campaign_id = c.id
  JOIN accounts a ON c.account_id = a.id
 WHERE abs(c.end_date::date - c.start_date::date) > 7
 GROUP BY a.id, a.name, date_part('year', a.created_at) || '-' || date_part('month', a.created_at);
