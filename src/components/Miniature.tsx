import { Badge, Button, Card, Group, Image, Text } from '@mantine/core';
import { FlexSpacer } from '@/components/FlexSpacer';

export const Miniature = ({ img, title, badge, description, btn }: any) => {
  return (
    <Card
      shadow="sm"
      p="lg"
      radius="md"
      withBorder
      style={{ display: `flex`, flexDirection: `column`, height: `23rem` }}
    >
      <Card.Section>
        <Image src={img} height={160} alt="Norway" />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{title}</Text>
        <Badge color="pink" variant="light">
          {badge}
        </Badge>
      </Group>

      <Text size="sm" color="dimmed">
        {description}
      </Text>

      <FlexSpacer />

      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        {btn}
      </Button>
    </Card>
  );
};
